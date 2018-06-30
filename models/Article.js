const mongoose = require('mongoose');

// save reference to Schema constructor
const Schema = mongoose.Schema;

// create new Schema
const ArticleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    articleId: {
        type: String,
        require: true
    }
});

// use mongoose model method to create model
const Article = mongoose.model('Article', ArticleSchema);

// export model
module.exports = Article;