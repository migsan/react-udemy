import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Miguel', age: 26 },
      { name: 'Juan', age: 23 },
      { name: 'Chrono', age: 2}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('clicked!');
    this.setState( {
      persons: [
        { name: newName, age: 26 },
        { name: 'Juan', age: 23 },
        { name: 'Chrono', age: 30 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Miguel', age: 26 },
        { name: event.target.value, age: 23 },
        { name: 'Chrono', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Yo yo yo</h1>
        <p>Hello there</p>
        <button onClick={() => this.switchNameHandler('Homero!!')}>Click me!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'CosmeFulanito')}
          changed={this.nameChangeHandler}>I like to run</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello i changed'))
  }
}

export default App;
