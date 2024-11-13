import React from 'react'
import ReactDOM from 'react-dom/client';
import {stateService} from "@jan.verhoeckx/shared-library";

class App extends React.Component {

    render() {
        const reactVersion = require('./package.json').dependencies['react'];
        // Usage
        const state = stateService
        console.log('data: ', state.getData());
        return ([
            <h1 key="app">
                React works!
                Hoi {state.getData()}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
            </h1>,
            <p>
                React Version: {reactVersion}
            </p>
        ])
    }
}

class Mfe4Element extends HTMLElement {
    connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<App />);
    }
}

customElements.define('react-element', Mfe4Element);