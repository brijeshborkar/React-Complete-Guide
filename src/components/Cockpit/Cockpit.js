import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass= classes.Button;
    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if(props.persons.length <=2){
      assignedClasses.push(classes.red); // classes['red] will be the array if the condition is true.
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);  //classes['bold] will be the output if the condition is true.
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
}

export default cockpit;