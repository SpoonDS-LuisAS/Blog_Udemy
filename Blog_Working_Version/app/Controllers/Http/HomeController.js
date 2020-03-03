'use strict'

const Post = use('App/Models/Post');

class HomeController {
    async index({view}){
        const posts = await Post.query().orderBy('id', 'desc');

        return view.render('home', {
            posts: posts
        }.fetch());
    }
}

module.exports = HomeController
