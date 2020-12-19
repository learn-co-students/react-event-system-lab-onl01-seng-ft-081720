import React from 'react';


class Keypad extends React.Component {
    keyHandle = () => {
        console.log("Entering password...")
    }
    
    render() {
        return (
        <input onKeyUp={this.keyHandle} type="password" ></input>
        )}
}

export default Keypad