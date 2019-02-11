import React, { Component } from 'react';
import './Nav.css';
import logo from '../../assets/img/logo.jpg'

class Nav extends Component {
    render () {
        return (
            // <nav className="nav-bar">
            //     <div className="nav-band">
            //         <div className="img-container px-auto"><img src={logo} className="img-fluid"></img></div>
            //     </div>
            //     <div className="nav-list-container">
            //         <ul className="nav-list">
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 1</a></li>
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 2</a></li>
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 3</a></li>
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 4</a></li>
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 5</a></li>
            //             <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 6</a></li>
            //         </ul>
            //     </div>
            // </nav>
            <nav>
                <div className="nav-band text-right">
                    <img src={logo} className="img-fluid h-100"></img>
                </div>
                <div className="nav-items">
                    <div className="nav-items-container">
                        <ul className="nav-list">
                            <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 1</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 2</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 3</a></li>
                            <li className="nav-list-item"><a href="#" className="nav-list-item-link">Item 4</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;