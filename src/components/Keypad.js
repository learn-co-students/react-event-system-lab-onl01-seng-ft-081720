import React from 'react'
class Keypad extends React.Component{

    keyUp = (e) => {
        console.log('Entering password...')
    }
    render(){
        return(
            <input onKeyUp={this.keyUp} type="password" />
        )
    }
}

export default Keypad