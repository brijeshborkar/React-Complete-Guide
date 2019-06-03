import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);

    this.state = {
      persons: [
        {id:"ddb4", name:"Brijesh", age:22},
        {id:"ddb5", name:"Akhilesh", age:26},
        {id:"ddb6", name:"Mithun", age:27},
        {id:"ddb7", name:"Mahesh", age:35}
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside  componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     {id:"ddb4", name:"Brijesh", age:22},
  //     {id:"ddb5", name:"Akhilesh", age:26},
  //     {id:"ddb6", name:"Mithun", age:27},
  //     {id:"ddb7", name:"Mahesh", age:35}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

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
    this.setState((prevState, props) => {
      return {showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked + 1
      }
    } );

  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }
  render() { 
    console.log('[App.js] Inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons =  <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }

   
    // if(this.state.persons.length >=3){
    //   classes.push('red bold');  //classes['red bold'] will be the output if the condition is true.
    // }

    return (
      <Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit
      appTitle={this.props.title}
      persons={this.state.persons}
      showPersons={this.state.showPersons}
      clicked={this.togglePersonsHandler}
      login={this.loginHandler}
      />
      <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      
      </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi this is using react.create element method'),React.createElement('p', null, 'This is a paragraph'));
  }
}

export default withClass(App, classes.App);
