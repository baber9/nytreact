import React from 'react';

export default class savedResults extends React.Component {
    constructor() {
        super();

        this.state = {
            deleted: false
        }

        this.delete = this.delete.bind(this);
    }

    delete(){
        this.setState({
            deleted: true
        }, () => {
            this.props.onDelete(this.props.articleId);
        });
    }

    render() {
        return (

            <div className="card article" key={this.props.articleId}>
                <div className="card-body">
                    <a href={this.props.url} target="rel=noopener">
                        <img src={this.props.image} className="img-thumbnail float-right" alt={this.props.headline} />
                        <h5 className="card-title">{this.props.headline}</h5>
                    </a>

                    <p>Date: {this.props.date}</p>

                </div>
            </div>

        )
    }

}

