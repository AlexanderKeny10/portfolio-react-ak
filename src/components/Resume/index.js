import React from 'react';
import skill1 from '../../assets/icons/html-5.svg';
import skill2 from '../../assets/icons/css.svg';
import skill3 from '../../assets/icons/javascript.svg';
import skill4 from '../../assets/icons/jquery.svg';
import skill5 from '../../assets/icons/bootstrap.svg';
import skill6 from '../../assets/icons/nodejs.svg';
import skill7 from '../../assets/icons/git-icon.svg';
import skill8 from '../../assets/icons/mongodb.svg';
import skill9 from '../../assets/icons/express.svg';
import skill10 from '../../assets/icons/handlebars.svg';
import skill11 from '../../assets/icons/mysql.svg';
import skill12 from '../../assets/icons/react.svg';
import skill13 from '../../assets/icons/mongoose.png';
import skill14 from '../../assets/icons/sequelize.svg';
import skill15 from '../../assets/icons/jest.svg';

function Resume() {
    const skills = [
        {
            name: 'HTML',
            image: skill1
        },
        {
            name: 'CSS',
            image: skill2
        },
        {
            name: 'Javascript',
            image: skill3
        },
        {
            name: 'jQuery',
            image: skill4
        },
        {
            name: 'Bootstrap',
            image: skill5
        },
        {
            name: 'Node',
            image: skill6
        },
        {
            name: 'Git',
            image: skill7
        },
        {
            name: 'MongoDB',
            image: skill8
        },
        {
            name: 'Express',
            image: skill9
        },
        {
            name: 'Handlebars',
            image: skill10
        },
        {
            name: 'MySQL',
            image: skill11
        },
        {
            name: 'React',
            image: skill12
        },
        {
            name: 'Mongoose',
            image: skill13
        },
        {
            name: 'Sequelize',
            image: skill14
        },
        {
            name: 'Jest',
            image: skill15
        },
    ];

    return (
        <section className='resume-section'>
            <div>
                <h2 className='heading'>
                    Resume
                </h2>
            </div>
            <p className='content resume-text'>View or download my full resume
                <a className='resume-link' 
                    href='https://drive.google.com/file/d/1EC6TFbXjFyiEBc4fwFWIBrFkOdyFKZ4V/view?usp=sharing' 
                    target='_blank' rel='noopener noreferrer'>here.</a>
            </p>
            <h2 className='heading'>
                My Skills
            </h2>

            <div className='icon-list'>
                {skills.map((skill) => (
                    <div key={skill.name} className='skill-div flex space-b'>
                        <img src={skill.image} 
                        className='skill-icon' 
                        alt={`Icon for ${skill.name}`} />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;