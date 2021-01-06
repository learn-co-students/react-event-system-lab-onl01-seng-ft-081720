// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {


    enterPassword = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
              <input onKeyUp={this.enterPassword} type="password" />  
            </div>
        );
    }
}

export default Keypad;

