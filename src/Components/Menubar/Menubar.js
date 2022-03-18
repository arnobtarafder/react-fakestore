import React from 'react';
import './Menubar.css'

const Menubar = () => {
    // const count = () => {
    //     console.log("Hello paisi");
    // }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className="items me-4 p2">Home</li>
                        <li className="items me-4 p2">Contact</li>
                        <li className="items me-4 p2">Cart</li>
                        <li className="items me-4 p2">Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;