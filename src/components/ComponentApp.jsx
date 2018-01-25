import React, { Component } from 'react';
import ComponentButton from './ComponentButton';
import ComponentInput from './ComponentInput';

class ComponentApp extends Component {

    render() {
        
        return (

            <div className="col-11 mx-auto border rounded m-4">
            <p className="mt-3 mt-4 mb-0 d-flex align-items-start font-weight-bold">Create a chirp:</p>
            <ComponentInput />
            <br />
            <ComponentButton />
            </div>
        )
    
    }
}

export default ComponentApp;