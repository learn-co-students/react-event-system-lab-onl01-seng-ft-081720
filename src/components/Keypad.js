// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    keyHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.keyHandler} type="password" />
            </div>
        );
    }
}

export default Keypad;