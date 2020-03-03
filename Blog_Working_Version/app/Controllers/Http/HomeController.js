'use strict'

const Post = use('App/Models/Post');

class HomeController {
    async index({view}){
        const posts = await Post.query().orderBy('id', 'desc').fetch();
        return posts;

        return view.render('home');
    }
}

module.exports = HomeController
