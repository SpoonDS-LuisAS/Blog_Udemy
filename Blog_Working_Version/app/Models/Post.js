'use strict'

const Model = use('Model')

class Post extends Model {
    static get table(){
        return 'posts';
    }

    author(){
        return this.hasOne('App/Model/User', 'uid', 'id');
    }
}

module.exports = Post

// var foo     =   new Post();
// foo.table();

// Post.table();