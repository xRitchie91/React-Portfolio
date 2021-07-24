import React from 'react';
import profilePicture from "../../assets/images/portfolio1.jpg"

const About = () => {
    return(
        <section className='my-5'>
            <div className='container d-flex flex-column text-center'>

                <div className='p-2'>
            <img src={profilePicture} className='my-2 profile-image' alt='profile'></img>
            </div>

            <div className='p-2'>
            <p className='about-me'>
            *Bio Here*

            <br/><br/>
            
            </p>
            </div>
            </div>
            <div><Footer/></div>
        </section>
    )
};

export default About;