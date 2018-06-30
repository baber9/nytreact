const path = require('path');
const router = require('express').Router();
const articleController = require('../controllers/articleController');

// API Routes
router.route('/saveArticle').post(articleController.saveArticle)
router.route('/getSavedArticles').get(articleController.getSavedArticles);
router.route('/deleteSavedArticles').delete(articleController.deleteSvedArticle);

router.use((req, res) => {
    res.sendFile(path.join(__dirnae, '../public/index.html'));
});

// export for use in server
module.exports = router;