'use strict'

const Category            = use('App/Models/Category');

class GlobalView {
  async handle ( context, next) {
    const categories      = await Category.all();

    context.view.share({
      categories:           categories.toJSON()
    });

    // call next to advance the request
    await next()
  }
}

module.exports = GlobalView
