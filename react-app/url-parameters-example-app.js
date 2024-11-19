import React from 'react'
import ReactDOM from 'react-dom/client';

class UrlParametersExampleApp extends React.Component {

    render() {
        const query = new URLSearchParams(window.location.search);

        console.log(query);
        return ([
            <div>
                <p>URL params:</p>
                <p className="shared-state">{JSON.stringify(Object.fromEntries(query))}</p>
            </div>
        ])
    }
}

class Element extends HTMLElement {
    connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<UrlParametersExampleApp/>);
    }
}

customElements.define('url-parameters-example-react-element', Element);