import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"ddb4", name:"Brijesh", age:22},
      {id:"ddb5", name:"Akhilesh", age:26},
      {id:"ddb6", name:"Mithun", age:27},
      {id:"ddb7", name:"Mahesh", age:35}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person ={
        ...this.state.persons[personIndex]
    }; 

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})

  }
  render() { 
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red'); // classes['red] will be the array if the condition is true.
    }
    if(this.state.persons.length <=1){
      classes.push('bold');  //classes['bold] will be the output if the condition is true.
    }
    // if(this.state.persons.length >=3){
    //   classes.push('red bold');  //classes['red bold'] will be the output if the condition is true.
    // }

    return (
      <div className="App">
      <h1>Hi I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi this is using react.create element method'),React.createElement('p', null, 'This is a paragraph'));
  }
}

export default App;
