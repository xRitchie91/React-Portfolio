import React from 'react';

function Nav(props) {

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/" className="header">
                    <span role="img" aria-label="camera"></span>
                    <center>React Portfolio</center>
                </a>
            </h2>
            
        </header >
    );
}

export default Nav;