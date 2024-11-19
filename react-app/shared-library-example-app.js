import React from 'react'
import ReactDOM from 'react-dom/client';
import {stateService} from "@jan.verhoeckx/shared-library";
import './shared-library-example-app.css';

class SharedLibraryExample extends React.Component {

    render() {
        // Get singleton instance of stateService
        const state = stateService

        return ([
            <p>Shared state from shell:</p>,
            <p className="shared-state">{state.getData()}</p>
        ])
    }
}

class Element extends HTMLElement {
    connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<SharedLibraryExample/>);
    }
}

customElements.define('shared-library-example-react-element', Element);