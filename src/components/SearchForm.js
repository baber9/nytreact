import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchParameters: {},
            search: '',
            startDate: '',
            endDate: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }


    handleChangeStart(date) {
        this.setState({
          startDate: moment(date)
        });
    }

    handleChangeEnd(date) {
        this.setState({
          endDate: moment(date)
        });
    }

    handleClear(e) {
        e.preventDefault()

        document.getElementById('topic').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
        document.getElementById('numOfRecs').selectedIndex = 0;
    }

    handleSubmit(e) {
        e.preventDefault();

        // console.log('topic: ', this.refs.topic.value);
        // console.log('numOfRecs: ', this.refs.numOfRecs.value);
        // console.log('endDate: ', this.state.endDate);
        // console.log('startDate: ', this.state.startDate);

        this.setState({
            searchParameters: {
                topic: this.refs.topic.value,
                startDate: this.state.startDate
                    ? `&begin_date=${moment(new Date(this.state.startDate)).format('YYYYMMDD')}`
                    : '',
                endDate: this.state.endDate
                    ? `&end_date=${moment(new Date(this.state.endDate)).format('YYYYMMDD')}`
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
                    <form>
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
                                    <option defaultValue>Number of Articles to Return</option>
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

                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChangeStart}
                                    className="form-control"
                                    id="startDate"
                                    ref="startDate"
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode='select'
                                    placeholderText="Start Date" />

                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                </div>

                                <DatePicker
                                    selected={this.state.endDate}
                                    onChange={this.handleChangeEnd}
                                    className="form-control"
                                    id="endDate"
                                    ref="endDate"
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode='select'
                                    placeholderText="End Date" />
                                
                            </div>

                        </div>

                        <button type="submit" className="btn btn-outline-primary" id="submit" onClick={this.handleSubmit}>Submit</button>

                        <button type="button" className="btn btn-outline-warning" id="clear" onClick={this.handleClear}>Clear Form</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

        );
    }
}