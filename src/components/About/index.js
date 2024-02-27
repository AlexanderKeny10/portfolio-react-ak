import React from 'react';
import pic from '../../assets/images/alexpic.jpg'

function About() {
    return (
        <section>
            <h2 className='heading'>About Me</h2>
            <div className='bio-container'>
                <img className='alex-pic' src={pic} alt='Alexander Kenney' />
                <p className='bio'>
                Full-Stack Developer with 5 years in Multimedia Production and 3 years in Web Development and and Relational Data Management. 
                Currently holds a Batchelor degree in Communications from Temple University and professional certificates in Full-Stack Web Development from University of Pennsylvania. 
                Passionate about leveraging experience in production with technical background in HTML, CSS, JavaScript, Python, 
                MySQL Relational Database and RESTful API’s to help develop web applications for a mission driven company.
                Expect to apply my acquired skills in the fast growing coding field. 
                </p>
            </div>
        </section>
    );
}

export default About;