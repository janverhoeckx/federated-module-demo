import React from 'react'
import ReactDOM from 'react-dom/client';
import {stateService} from "@jan.verhoeckx/shared-library";
import './shared-library-example-app.css';

class SharedLibraryExample extends React.Component {

    render() {
        // Get singleton instance of stateService
        const state = stateService

        return ([
            <div className="container">
                <h2>Shared state from shell:</h2>
                <p className="shared-state">{state.getData()}</p>
            </div>
        ])
    }
}

class Element extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'http://localhost:3000/shared-library-example-app.css');

        shadowRoot.appendChild(link);

        const root = ReactDOM.createRoot(shadowRoot);
        root.render(<SharedLibraryExample/>);
    }
}

customElements.define('shared-library-example-react-element', Element);