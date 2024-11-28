import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const reactVersion = require('./package.json').dependencies['react'];

    return (
        <div className="App">
            <h1>React app different version</h1>

            <p>React version: {reactVersion}</p>
        </div>
    );
}

class Mfe4Element extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'http://localhost:3001/App.css');

        shadowRoot.appendChild(link);

        ReactDOM.render(<App/>, shadowRoot);
    }
}

customElements.define('react-different-version-element', Mfe4Element);