import React, { Component } from 'react';
import Ghost from './Ghost.gif';

export class Spiner extends Component { // Corrected the component definition
    render() {
        return (
            <div className='text-center'>
                <img src={Ghost} alt="Loading..." />
            </div>
        );
    }
}

export default Spiner; // Corrected the component export
