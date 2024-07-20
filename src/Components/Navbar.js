
import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        let { mode, toggleMode } = this.props
        return (
            <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NEWS FATAKSE!!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/business">Business</a>
                             </li>   
                                
                            <li className="nav-item">
                                <a className="nav-link" href="/entertainment">Entertainment</a>
                             </li>      
                                
                            <li className="nav-item">
                                <a className="nav-link" href="/health">Health</a>
                             </li>   
                                
                            <li className="nav-item">
                                <a className="nav-link" href="/sports">Sports</a>
                             </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="/science">Science</a>
                             </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="/technology">Technology</a>
                             </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                                
                        </ul>
                        <div className={`form-check form-switch mx-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className='form-check-label' for='flexSwitchCheckDefault'>Enable Darkmode</label>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

