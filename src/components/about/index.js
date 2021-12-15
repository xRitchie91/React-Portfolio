import React from 'react';
import coverImage from "../../assets/about/rpo.icon.png";


function About() {
    return (
            <section className="my-5">
                <center><h1 id="about">Nice to Meet You!</h1>
                <img src={coverImage} className="my2" style={{ width: "25%" }} alt="cover" />
            

              <p>
                    Allow me to introduce myself..<br></br>
                    My Name is Richard Ortiz, but you may call me Ritchie.<br></br>
                    <br></br>
                    
                    Where I'm From: Phoenix, Arizona<br></br>
                    Where I Live: Round Rock, Texas<br></br>
                    <br></br>

                    In my free time I enjoy:<br></br>
                    Watching sports, listening to music, spending time with friends and family, <br></br>
                    learning about different historical topics, learning new technologies, frameworks, <br></br>
                    and coding languages and playing video games <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </p></center>
            </section>
    );
}

export default About;
