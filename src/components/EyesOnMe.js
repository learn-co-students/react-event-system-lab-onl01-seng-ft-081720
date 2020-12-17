import React from 'react'
class EyesOnMe extends React.Component{
    focus = (e) =>{
        console.log("Good!")
    }

    blur = (e) =>{
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button
            onFocus={this.focus}
            onBlur={this.blur}

            ></button>
        )
    }
}

export default EyesOnMe;