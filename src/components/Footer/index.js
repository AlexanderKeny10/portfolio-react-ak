
import React from 'react';

function Footer() {


    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/Alexanderkeny10"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/alexander-kenney-01690610a/"
        },
        {
            name: "fab fa-stack-overflow",
            link: "https://stackoverflow.com/users/14980036/alex-kenney"
        },
    ]

    return (
        <footer className="footer">
            <div className='flex-row px-1'>
                {icons.map(icon =>
                    (
                        <a href={icon.link} key={icon.name} target="_blank" 
                        rel="noopener noreferrer">
                        <i className={icon.name}></i>
                        </a>
                    )
                )}
            </div>
            {/* <div className='footer-div'>
                    <a className="link" href="https://github.com/Aken00" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                </div>
                <div className='footer-div'>
                    <a className="link" href="https://www.linkedin.com/in/alexander-kenney-01690610a/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div className='footer-div'>
                    <a className="link" href="https://stackoverflow.com/users/14980036/alex-kenney" target="_blank" rel='noreferrer'><i className="fab fa-stack-overflow fa-3x"></i></a>
            </div> */}
        </footer>
    );
}

export default Footer;