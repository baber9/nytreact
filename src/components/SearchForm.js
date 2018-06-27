import React from 'react';
import moment from 'moment';


export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchParameters: {},
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            searchParameters: {
                topic: this.refs.topic.value,
                startDate: this.refs.startDate.value
                    ? `&begin_date=${moment(new Date(this.refs.startDate.value)).format('YYYYMMDD')}`
                    : '',
                endDate: this.refs.endDate.value
                    ? `&end_date=${moment(new Date(this.refs.endDate.value)).format('YYYYMMDD')}`
                    : '',
                limit: this.refs.numOfRecs.value
                    ? this.refs.numOfRecs.value
                    : 10
            }
        }, () => {
            this.props.query(this.state);
            this.setState({
                searching: true
            }, () => setTimeout(() => this.setState({ searching: null}), 1500));
            });

    }

    render() {
        return (

        <div className="container">

            <div className="card text-center section">
                <div className="card-body">
                        
                    <div className="col-12 align-items-center">
                            
                        <h2 className="header">Search for an Article</h2>

                        <div className="row">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                                </div>
                                <input type="text" className="form-control" id="topic" ref="topic" aria-describedby="topic" placeholder="Topic" />
                            </div>
                        </div>
                            
                        <div className="row">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-list-ol" aria-hidden="true"></i></span>
                                </div>
                                <select className="form-control" id="numOfRecs" ref="numOfRecs">
                                    <option>Number of Articles Returned</option>
                                    <option>1</option>
                                    <option>5</option>
                                    <option>10</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                </div>
                                <input id="startDate" ref="startDate" className="form-control" type="text" placeholder="Start Year, ex '1999' (Optional)" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                </div>
                                <input id="endDate" ref="endDate" className="form-control" type="text" placeholder="End Year, ex '2017' (Optional)" />
                            </div>
                        </div>

                        <button type="button" className="btn btn-outline-primary" onClick={this.handleSubmit}>Submit</button>

                    </div>
                </div>
            </div>

        </div>

        );
    }
}