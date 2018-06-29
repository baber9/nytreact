import React from 'react';

// import components
import NavBar from '../components/NavBar';
import SearchForm from '../components/SearchForm';
import Articles from '../components/Articles';

// import utilities
import API from '../utils/API';

class Home extends React.Component {
    constructor() {
        super();
        
        // set initial state
        this.state = {
            articles: [],
            limit: 0
        };

        this.query = this.query.bind(this);
        this.search = this.search.bind(this);
    }

    query = ({searchParameters}) => {
        const {topic, limit, startDate, endDate, } = searchParameters;

        this.setState({limit});
        const queryString = `${topic}${startDate}${endDate}`;
        this.search(queryString);
    }

    search = queryString => {

        // console.log('queryString: ', queryString);
        API.search(queryString).then(res => {

            let articlesArray = [];

            res.data.response.docs.map(({
                    snippet, 
                    web_url, 
                    pub_date, 
                    _id, 
                    multimedia}) => {
                articlesArray.push({
                    headline: snippet, 
                    url: web_url, 
                    date: pub_date, 
                    articleId: _id, 
                    image: multimedia[2]});
            });

            // console.log('articlesArray: ', articlesArray);

            this.setState(prevState => ({
                articles: [...prevState].concat(articlesArray).splice(0, this.state.limit)
            }), console.log(this.state))
        }).catch(err => console.log(err));
    };

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

                        <SearchForm query={this.query} />

                        <Articles results={this.state} />

                </div>
                    
            </div>
                
            {/* <!-- Footer --> */}
            <footer>NYT Article Search built with React by Bryan Aber</footer>

        </React.Fragment>

        );
    }
}

export default Home;