import React from 'react';
import pic from '../../assets/images/alexpic.jpg'

function About() {
    return (
        <section>
            <h2 className='heading'>About Me</h2>
            <div className='bio-container'>
                <img className='alex-pic' src={pic} alt='Alexander Kenney' />
                <p className='bio'>
                JavaScript Developer with 4+ years in Multimedia Production, Marketing, and Web Design. Currently holds a degree in 
                Media Studies from Temple University and professional certificates in Full-Stack Web Development from University of Pennsylvania. 
                Passionate about leveraging experience in multimedia production with technical background in JavaScript, React, Anguar and RESTful API’s 
                to develop web applications for a mission driven company. Expect to apply my acquired skills in the fast growing coding field. 
                </p>
            </div>
        </section>
    );
}

export default About;