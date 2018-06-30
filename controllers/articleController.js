let db = require('../models/Article');

module.exports = {
    saveArticle: (req, res) => {
        db.findOne({ articleId: req.body.articleId })
            .then(response => {
                db.create(req.body).then(res => {
                    console.log(`${res} created.`);
                    res.send('Save successful');
                }).catch(err => res.json(err));
            })
    },

    getSavedArticles: (req, res) => {
        db.find({})
            .sort({ date: -1 })
            .then(returnedArticles => {
                console.log('Saved articles returned')
                res.json(returnedArticles)
            })
            .catch(err => res.status(422).json(err));
    },

    deleteSavedArticle: (req, res) => {
        // console.log(JSON.stringify(req.body));
        db.remove({ articleId: req.body.articleId }, (err) => {
            if (err) throw err;
            console.log('Article deleted');

            db
                .find({})
                .sort({ date: -1 })
                .then(returnedArticles => res.json(returnedArticles))
                .catch(err => res.status(422).json(err));

        })
            .catch(err => res.status(422).json(err));
    }
};