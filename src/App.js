import React, {Component} from 'react';
import './App.css';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

    state = {
        name: 'Pioter',
        value: '',
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    };

    render() {
        return (
            <div className="App">
                <ol>
                    <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput
                    </li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                </ol>
                <hr/>

                <UserInput change={this.handleChange.bind(this)}/>
                <UserOutput name={this.state.name}/>
            </div>
        );
    }
}

export default App;
