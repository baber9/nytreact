import React from 'react';
import API from '../utils/API';

export default class Article extends React.Component {
    constructor() {
        super();

        this.state = {
            saved: false
        }
        this.saveArticle = this.saveArticle.bind(this);
    }

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
        }));
    }

    render() {
        return (

    <React.Fragment>
        <div className="card article" key={this.props.id}>
            <div className="card-body">
                <a href={this.props.url} target="rel=noopener">
                    <img src={this.props.image} className="img-thumbnail float-right"
                    alt={this.props.headline} />
                    <h5 className="card-title">{this.props.headline}</h5>
                </a>

                <p>Date: {this.props.date}</p>

                {this.state.saved ? 
                    (<a 
                        id={this.props.id}
                        className="btn btn-outline-success disabled"
                    >Article Saved</a>) : 
                    (<a 
                        id={this.props.id} 
                        className="btn btn-outline-success"
                        onClick={this.saveArticle}
                    >Save Article</a>)
                }

            </div>
        </div>
    </React.Fragment>

        )
    }



}

