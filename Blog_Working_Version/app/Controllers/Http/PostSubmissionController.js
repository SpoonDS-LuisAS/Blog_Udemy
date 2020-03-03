'use strict'

const {validate} = use("Validator");
const Utility = use('Utility');
const Helpers = use('Helpers');

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
        const img = request.file('img', {
            types:['image'],
            size:'5mb'
        });
        const file_name = Utility.get_random_str(8)+'.'+img._clientName.split('.').pop();
        await img.move(Helpers.publicPath('uploads'), {
            name: file_name
        });
        if(!img.moved()){
            return output;
        }
    }
}

module.exports = PostSubmissionController
