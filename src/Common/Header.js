import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">A U M</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav header-link">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Properties
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <h6 class="dropdown-header">INDIA</h6>
                                    <a className="dropdown-item" href="#">Bangalore</a>
                                    <a className="dropdown-item" href="#">Sultanpur</a>
                                    <h6 class="dropdown-header">USA</h6>
                                    <a className="dropdown-item" href="#">Dallas</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Navbar;