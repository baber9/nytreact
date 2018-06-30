import React from 'react';
// import API from '../utils/API';
import Article from './Article';


export default class Articles extends React.Component {

    render() {

        let searchResults = [];

        if (this.props.results.articles.length > 0) {
            searchResults = this.props.results.articles.map(article => {
                // console.log(article);
                return(
                
                    <Article 
                        id={article.articleId}
                        url={article.url}
                        headline={article.headline}
                        date={article.date}
                        key={article.articleId}
                        image={ `${article.image ? 
                        "https://static01.nyt.com/" + article.image.url : "http://www.clker.com/cliparts/B/u/S/l/W/l/no-photo-available-th.png"
                    }`} />

                )
            })
        }
        
        return (

            <React.Fragment>

                {/* Only Show heading if results */}
                {this.props.results.articles.length > 0 ? (
                <div className="container">

                    <div className="card section">
                        <div className="card-body">
                                    
                            <h2 className="header">Search Results</h2>

                            {searchResults}

                        </div>
                    </div>
                </div>
                ) : <div></div>}

            </React.Fragment>

        );
    }

}





                