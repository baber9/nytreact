import axios from 'axios';
require('dotenv').config();

// Build Query String
const queryString = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';
const API_KEY = process.env.REACT_APP_NY_TIMES_API_KEY;

export default {
    
    search: searchQuery => {
        return axios.get(`${queryString}${API_KEY}&q=${searchQuery}`);
    },

    saveArticle: articleObject => {
        return axios.post('/saveArticle', articleObject);
    },

    getSavedArticles: () => {
        return axios.get('/getSavedArticles');
    },

    deleteSavedArticle: id => {
        return axios.delete('/deleteSavedArticle', { data: { articleId: id } });
    }

};