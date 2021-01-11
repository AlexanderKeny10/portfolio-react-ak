import React from 'react';
import pic from '../../assets/images/alexpic.jpg'

function About() {
    return (
        <section>
            <h2 className='heading'>About Me</h2>
            <div className='bio-container'>
                <img className='alex-pic' src={pic} alt='Alexander Kenney' />
                <p className='bio'>
                I am a diligent and detail oriented video editor and producer with over 5 years of experience and skills in nearly all fields of multimedia production.
                I have begun to make strides in a web development bootcamp through the University of Pennsylvania.
                With this new found passion for coding and web development I hope apply my knowledge to this field
                utilizing my background in digital production and editing.
            </p>
            </div>
        </section>
    );
}

export default About;