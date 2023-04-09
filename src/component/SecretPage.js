import React, { Component } from 'react';
import HandleSubmit from './HandleSubmit.js';

class SecretPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecretPage: this.state.dataParentToChild
        }
    }

    submitHandler = () => {
        HandleSubmit('456');
    }

    render() {
        return (
            <div>
                <p>請大家多多指教
                    <span onClick={this.submitHandler}>：）</span>
                </p>
            </div>
        )
    }
}