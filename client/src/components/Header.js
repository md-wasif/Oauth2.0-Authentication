import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';


import * as actions from '../actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }
    signOut(){
        console.log('[sign Out] called!');
        this.props.signOut();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '30px'}}>
            <Link className="navar-brand" to="/">
                <strong>NUTRIFY_ME</strong></Link>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                 </ul>

                <ul className="nav navbar-nav ml-auto">

                    { !this.props.isAuth ? 
                    [<li className="nav-item" key="signup">
                    <Link className="nav-link" to="/signup">
                        Sign Up
                    </Link>
                    </li>,
                    <li className="nav-item" key="signin">
                        <Link className="nav-link" to="/signin">
                            Sign In
                        </Link>
                </li>] : null}

                { this.props.isAuth ?  <li className="nav-item">
                        <Link className="nav-link" to="/signout" onClick={this.signOut}>
                            Sign Out
                        </Link>
                    </li> : null}
                   
                </ul>
            </div>
            </nav>
        );
    }
}


function mapStateToProps(state) {
    return {
     isAuth: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, actions)(Header);