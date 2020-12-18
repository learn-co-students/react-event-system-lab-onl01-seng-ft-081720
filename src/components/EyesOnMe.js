import React, { Component } from 'react';

class EyesOnMe extends Component {

    focused = () => {
        console.log("Good!")
    }

    unfocused = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button onFocus={this.focused} onBlur={this.unfocused} />
            </div>
        );
    }
}

export default EyesOnMe;
