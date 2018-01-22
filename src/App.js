import React, {Component} from 'react';
import Navbar from './Common/Header'
import Footer from './Common/Footer'
import Bangalore from './Properties/Bangalore';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'AUM HOME', location: 'Electronic City'},
            {id: '2', name: 'AUM PrimeCorp', location: 'Electronic City Phase II'},
            {id: '3', name: 'AUM Parkway', location: 'Banerghatta Road'},
            {id: '4', name: 'AUM Watermark', location: 'Jayanagar'}
        ]
    };

    switchNameHandler = () => {
        console.log('You clicked button');
        this.setState({
            persons: [
                {name: 'AUM HOME', location: 'Electronic City'},
                {name: 'AUM PrimeCorp', location: 'Electronic City Phase II'},
                {name: 'AUM Parkway', location: 'Banerghatta Road'},
                {name: 'AUM Watermark', location: 'Jayanagar 4th block'}
            ]
        })
    };

    deletePropertyHandler = (propertyIndex) => {
        const properties = [...this.state.persons];
        properties.splice(propertyIndex, 1);
        this.setState({persons: properties});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                </header>
                {
                    this.state.persons.map((person, index) => {
                            return <Bangalore name={person.name}
                                              location={person.location}
                                              key={person.id}
                                              click={() => this.deletePropertyHandler(index)}
                            />
                        }
                    )}
                <button className="btn btn-outline-primary" onClick={this.switchNameHandler}>Switch Name</button>
                <Footer/>
            </div>
        );
    }
}

export default App;
