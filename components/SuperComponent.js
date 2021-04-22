import React, { Component } from 'react'

export class SuperComponent extends Component {
    constructor() {
        super();
        
        this.someVariable = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SuperComponent
