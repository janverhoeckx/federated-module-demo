import React from 'react'
import ReactDOM from 'react-dom/client';
import {stateService} from "@jan.verhoeckx/shared-library";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';

class App extends React.Component {

    render() {
        const reactVersion = require('./package.json').dependencies['react'];
        // Usage
        const state = stateService
        console.log('data: ', state.getData());
        return ([
            <Header/>,
            <StepIndicator/>,
            <AppointmentTypeSelector/>,
            <p>React Version: {reactVersion} </p>,
            <p>Logged in user: {state.getData()}</p>
        ])
    }
}

const Header = () => (
    <div className="header">
        <h1>Een nieuwe afspraak maken</h1>
        <div className="alert">
            <strong>Bel 112 bij levensbedreigende situaties.</strong>
            <p>Is het een spoedgeval of twijfelt u over de ernst van de klachten? Neem dan telefonisch contact op met uw
                zorgverlener.</p>
        </div>
    </div>
);

const StepIndicator = () => (
    <div className="step-indicator">
        <div className="line"></div>
        <div className="step active">
            <i className="fas fa-user-md"></i>
            <span>Type</span>
        </div>
        <div className="step">
            <i className="fas fa-question-circle"></i>
            <span>Reden</span>
        </div>
        <div className="step">
            <i className="fas fa-calendar-alt"></i>
            <span>Datum</span>
        </div>
        <div className="step">
            <i className="fas fa-check-circle"></i>
            <span>Check</span>
        </div>
    </div>
);

const AppointmentTypeSelector = () => (
    <div className="appointment-type-selector">
        <h2>Kies het type afspraak</h2>

        <div className="appointment-category">
            <h3>Doktersafspraak</h3>
            <AppointmentOption title="Digitaal Spreekuur"/>
            <AppointmentOption title="Consult op de praktijk"/>
        </div>

        <div className="appointment-category">
            <h3>Afspraak met een praktijkondersteuner</h3>
            <AppointmentOption title="Oren uitspuiten"/>
        </div>
    </div>
);

const AppointmentOption = ({title}) => (
    <div className="appointment-option">
        <div className="appointment-details">{title}</div>
        <div className="arrow-icon">
            <i className="fas fa-chevron-right"></i>
        </div>
    </div>
);

class Mfe4Element extends HTMLElement {
    connectedCallback() {
        const root = ReactDOM.createRoot(this);
        root.render(<App/>);
    }
}

customElements.define('react-element', Mfe4Element);