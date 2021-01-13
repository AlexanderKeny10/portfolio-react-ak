import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const { sections, currentSection, setCurrentSection } = props;

    return (
        <div>
        <header>
            <Nav
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            >
            </Nav>
        </header>
        </div>
    );
}

export default Header;