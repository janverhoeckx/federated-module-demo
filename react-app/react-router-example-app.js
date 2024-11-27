import React from 'react'
import ReactDOM from 'react-dom/client';
import {stateService} from "@jan.verhoeckx/shared-library";
import './shared-library-example-app.css';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";

class ReactRouterExample extends React.Component {

    render() {
        return ([
            <div className="container">
                <BrowserRouter basename="/react-router-example">
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="blogs" element={<Blogs/>}/>
                            <Route path="contact" element={<Contact/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        ])
    }
}

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

const Home = () => {
    return <h1>Home</h1>;
};

const Blogs = () => {
    return <h1>Blogs</h1>;
};

const Contact = () => {
    return <h1>Contact</h1>;
};


class Element extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'http://localhost:3000/react-router-example-app.css');

        shadowRoot.appendChild(link);

        const root = ReactDOM.createRoot(shadowRoot);
        root.render(<ReactRouterExample/>);
    }
}

customElements.define('react-router-example-react-element', Element);