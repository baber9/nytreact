import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

class NavBar extends React.Component {


    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href='/'>NY Times Article Search</a>
                <form className="form-inline" action='/saved'>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Saved Articles</button>
                </form>
            </nav>
        );
    }

}

export default NavBar;