// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    handlefoucs = ()=>{
        console.log('Good!')
    }

    handleblur = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <div>
            <button onFocus={this.handlefoucs} onBlur= {this.handleblur} />
            </div>
        )
    }

}

