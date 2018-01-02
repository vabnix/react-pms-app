import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <footer className="page-footer indigo center-on-small-only pt-0">
                <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <p className="footer">
                            © 2018 Copyright: <a href="https://www.aum-properties.com"> A U M </a>
                        </p>
                    </div>
                </nav>
            </footer>
        );

    }

}

export default Footer;