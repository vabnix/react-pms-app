import React, {Component} from 'react';
import Navbar from './Common/Header'
import Footer from './Common/Footer'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                </header>
                <Footer/>
            </div>
        );
    }
}

export default App;
