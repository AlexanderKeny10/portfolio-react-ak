
import React from 'react';

function Footer() {

    return (
        <footer className="d-flex justify-content-center footer">
            <div className='flex-row'>
                <div className='px-2'>
                    <a className="link" href="https://github.com/Aken00" target="_blank" rel='noreferrer'><i className="fab fa-github fa-3x"></i></a>
                </div>
                <div className='px-2'>
                    <a className="link" href="https://www.linkedin.com/in/alexander-kenney-01690610a/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;