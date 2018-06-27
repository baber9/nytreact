import React from 'react';
import API from '../utils/API';


export default class Articles extends React.Component {
    constructor() {
        super();
        this.state = {
            saved: false
        }

        this.saveArticle = this.saveArticle.bind(this);
    };

    saveArticle() {

        let thisState = this;

        API.saveArticle({
            articleId: this.props.id,
            url: this.props.url,
            headline: this.props.headline,
            date: this.props.date,
            image: this.props.image
        }).then(thisState.setState({
            saved: true

            // CHANGE BUTTON TO SAVED!!!
        }))

    }

    render() {

        let searchResults = [];

        if (this.props.results.articles.length > 0) {
            searchResults = this.props.results.articles.map(article => {

                // let imgLink = 'https://static01.nyt.com/' + {article.image.url};


                return(
                
                <React.Fragment>
                    {/* Show only if results */}
                    {this.props.results.articles.length > 0 ? (
                    <div className="card article">
                        <a href={article.url} target="rel=noopener">
                        <div className="card-body">
                            <img 
                                src={article.image.url}
                                className="img-thumbnail float-right" 
                                alt={article.headline} />
                            <h5 className="card-title">{article.headline}</h5>
                            <p>Date: {article.date}</p>
                            <a 
                                data-id={article.id} 
                                className="btn btn-outline-success" 
                                onClick={this.saveArticle}>Save Article</a>
                        </div>
                        </a>
                    </div>
                    ) : <div></div>}
                </React.Fragment>

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





                