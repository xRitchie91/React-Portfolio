import React from 'react';

function Nav(props) {

    return (
        <header className="flex-row px-1">
          <center>
            <h2>
                <a data-testid="link" href="/" className="header">
                    <span role="img" aria-label="camera"></span>Welcome</a><br></br>
            </h2>
            <h4>
                <a data-testid="link" href="/about" className="about">
                  <span role="img" aria-label="camera"></span> About</a> • 

                  <a data-testid="link" href="/projects" className="projects">
                  <span role="img" aria-label="camera"></span> Projects</a> • 

                  <a data-testid="link" href="https://www.github.com/xRitchie91" className="github">
                  <span role="img" aria-label="camera"></span> GitHub</a> • 

                  <a data-testid="link" href="https://www.linkedin.com/rportiz" className="linkedin">
                  <span role="img" aria-label="camera"></span> Linkedin</a> •

                  <a data-testid="link" href="https://bit.ly/3m8hpaO" className="Resume">
                  <span role="img" aria-label='camera'></span> Resume</a>

            </h4>
            </center>
            
        </header >
    );
}

export default Nav;