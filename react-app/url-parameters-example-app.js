import React from 'react'
import ReactDOM from 'react-dom/client';

class UrlParametersExampleApp extends React.Component {

    render() {
        const query = new URLSearchParams(window.location.search);

        console.log(query);
        return ([
            <div className="container">
                <h2>URL params:</h2>
                <p className="shared-state">{JSON.stringify(Object.fromEntries(query))}</p>
            </div>
        ])
    }
}

class Element extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'http://localhost:3000/url-parameters-example-app.css');

        shadowRoot.appendChild(link);

        const root = ReactDOM.createRoot(shadowRoot);
        root.render(<UrlParametersExampleApp/>);
    }
}

customElements.define('url-parameters-example-react-element', Element);