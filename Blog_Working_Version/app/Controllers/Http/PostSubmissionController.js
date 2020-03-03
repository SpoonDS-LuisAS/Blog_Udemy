'use strict'

const {validate} = use("Validator");

class PostSubmissionController {
    async submit({request}){
        let output = {status: 1};
        const post_validation = await validate(request.all(), {
            title:'required|min:3|max:255|string',
            category:'required',
            content:'required|string'
        });
        if(post_validation.fails()){
            return output;
        }
    }
}

module.exports = PostSubmissionController
