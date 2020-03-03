'use strict'

const Post                  =   use( 'App/Models/Post' );

class PostController {
    async page({ params, view }){
        const single_post   =   await Post.find( params.id );
        
        return view.render( 'single-post', {
            post:               single_post
        });
    }
}

module.exports = PostController
