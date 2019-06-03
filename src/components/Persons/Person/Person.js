import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
        
    }

    focus(){
        this.inputElement.current.focus();
    }

    render() { 
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm Authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                ref ={this.inputElement}
                type="text" 
                onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string,
    age: PropTypes.number,
    cchanged: PropTypes.func
};

export default withClass(Person, classes.Person);
