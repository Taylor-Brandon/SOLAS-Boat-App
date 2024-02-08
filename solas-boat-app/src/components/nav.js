import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-side">
                <div className="container-fluid">
                    <a className="navbar-brand">Offcanvas dark navbar</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                <Link className='searchLink' to='/home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='pdfLink' to='/pdf'>PDF</Link>
                                </li>
                                <li>
                                    <button className='btn btn-warning'>Add Data</button>
                                </li>
                                <li>
                                    <button className='btn btn-warning'>Adjust Roles</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;

