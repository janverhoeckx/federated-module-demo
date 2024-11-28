import React, {useState} from 'react'
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        dob: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
    };

    const reactVersion = require('./package.json').dependencies['react'];

    return (
        <div>
            <div className="form-container">
                <h1>Inschrijfformulier Huisartsenpraktijk</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Naam:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefoonnummer:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Adres:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Geboortedatum:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required/>
                    </div>
                    <button type="submit">Inschrijven</button>
                </form>
            </div>
            <div className="react-version">
                <p>React version: {reactVersion}</p>
            </div>
        </div>
    );
};

class Mfe4Element extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'http://localhost:3000/app.css');

        shadowRoot.appendChild(link);

        const root = ReactDOM.createRoot(shadowRoot);
        root.render(<App/>);
    }
}

customElements.define('react-element', Mfe4Element);