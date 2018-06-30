import React from 'react';

import API from '../utils/API';

import SavedArticles from '../components/SavedArticles';
import NavBar from '../components/NavBar';

class Saved extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            savedArticles: 0,
            articles: 0
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    onDelete(id) {
        API.deleteSavedArticle(id).then((remainingArticles) => {
            this.setState({
                articles: remainingArticles.data.map(each => {
                    return (
                        <SavedArticles 
                            articleId={each.articleId} 
                            key={each.articleId} 
                            url={each.url} 
                            title={each.title} 
                            image={each.image} 
                            date={each.date} 
                            onDelete={this.onDelete} 
                        />
                    );
                })
            })
        })
    }

    componentDidMount() {
        API.getSavedArticles().then(savedArticles => {
            
            const articles = savedArticles.data;

            this.setState({
                articles: articles.map(each => {
                    return(
                        <SavedArticles
                            articleId={each.articleId} 
                            key={each.articleId} 
                            url={each.url} 
                            title={each.title} 
                            image={each.image} 
                            date={each.date} 
                            onDelete={this.onDelete} 
                        />
                    )
                })
            })
        }).then(this.setState({
            SavedArticles: true
        }));
    }


    render() {
        return(

            <React.Fragment>
            
            {/* <!-- Page Wrapper --> */}
            <div className="wrapper">

                <NavBar />
                
                {/* <!-- Main Wrapper --> */}
                <div id="main">

                    {/* <!-- Background - 20vh --> */}
                    <div className="bg"></div>


                        {this.state.savedArticles ? <div>this.state.articles</div> : (<h2>Currently, there are no articles saved.</h2>)}

                </div>
                    
            </div>
                
            {/* <!-- Footer --> */}
            <footer>NYT Article Search built with React by Bryan Aber</footer>

        </React.Fragment>

        );
    }

}

export default Saved;