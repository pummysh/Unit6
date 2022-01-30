const {Schema,model} = require('mongoose');

const Url=new Schema(
    {
        long_url:{type: 'string',required: true},
        short_url:{type: 'string'}, 
        times:{type: 'number', default: 0}
    },
    {
        versionKey: false,
    }
)

module.exports =model("Url",Url);