import React from 'react';
import project1 from '../../assets/images/artspo-landingpage-port.png';
import project2 from '../../assets/images/Budget-Tracker1.jpg';
import project3 from '../../assets/images/PlayerBeyond-SS2.png';
import project4 from '../../assets/images/Tech-blog-dashboard-ss1.png';
import project5 from '../../assets/images/WeatherDashboard1.png';
import project6 from '../../assets/images/Watch-&-Sip-app.png';

function Project() {

    const projects = [
        {
            id: '1',
            name: 'Art-spo',
            url: 'https://art-spo.herokuapp.com/',
            repo: 'Art-Spo',
            features: 'MERN STack, MySQL, Graphql, Node.js, Express.js, mongodb, apollo-server',
            image: project1
        },
        {
            id: '2',
            name: 'Budget Tacker',
            url: 'https://budget-traker-app.herokuapp.com/',
            repo: 'Budget-Tracker-app',
            features: 'Full Stack, MVC, MySQL, MongoDB, Mongoose.js, MongoDB Atlas, Heroku',
            image: project2
        },
        {
            id: '3',
            name: 'PlayerBeyond',
            url: 'https://alexanderkeny10.github.io/playerbeyond/',
            repo: 'playerbeyond',
            features: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, Heroku',
            image: project3
        },
        {
            id: '4',
            name: 'Biased Tech Blog',
            url: 'https://biased-tech-hub.herokuapp.com/',
            repo: 'Tech-Blog-MVC',
            features: 'Full Stack, MVC, MySQL, RESTful API, Node.js, Express.js, Handlebars.js',
            image: project4
        },
        {
            id: '5',
            name: 'Weather Dashboard',
            url: 'https://alexanderkeny10.github.io/weather-dashboard-ak/',
            repo: 'weather-dashboard-ak',
            features: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Moment.js, OpenWeather API',
            image: project5
        },
        {
            id: '6',
            name: 'Watch & Sip',
            url: 'https://quiet-ocean-97053.herokuapp.com/',
            repo: 'Watch-and-Sip',
            features: 'Full Stack, MVC, MySQL, RESTful API, Node.js, Express.js, Handlebars.js',
            image: project6
        },
    ]

    return (
        <div className='project-grid'>
            {projects.map((project) => (
                <div key={project.repo} className={`grid-item project-${project.id}`}>
                    <a href={project.url} target='_blank' rel='noreferrer'>
                        <h3 className='project-title'>{project.title}</h3>
                        <img
                            src={project.image}
                            alt={(`Screenshot of ${project.title} App`)}
                            className='project-img'
                        />
                    </a>
                    <div>
                        <p className='project-feature'>{project.features}</p>
                    </div>
                    <div className='repo-link-wrap'>
                        {project.type === 'back-end' ?
                            <a href={project.url} target='_blank' rel='noreferrer'>View Demo</a>
                            :
                            <a href={project.url} target='_blank' rel='noreferrer'>Visit App</a>
                        }
                        <a href={(`https://github.com/alexanderkeny10/${project.repo}`)} target='_blank' rel='noreferrer' className='project-repo'>GitHub Repo</a>
                    </div>
                </div>
            ))
            }
        </div >
    );

}
export default Project;