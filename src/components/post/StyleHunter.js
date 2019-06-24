import React from 'react';
import Congresspost from './Congresspost'

class StyleHunter extends React.Component{
    render(){
        return(
            <div className="stylehunter">
            <div className="stylehunternav">
             <a className="navbar-brand" href="/">StyleHunter</a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/">World</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Food</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Animal</a>
                </li>
            </ul>
            </div>
            {/* <Navbar className="navbar" style={{paddingBottom:'0px'}}>
                <Navbar.Brand className="navbarheading" href="#home" style={{color:'#A76CC9',fontWeight:'900'}}>StyleHunter</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end navbardata">
                <Nav.Link className="data" href="#world">World</Nav.Link>
                <Nav.Link className="data" href="#people">People</Nav.Link>
                <Nav.Link className="data" href="#food">Food</Nav.Link>
                <Nav.Link className="data" href="#animal">Animal</Nav.Link>
                </Navbar.Collapse>
            </Navbar> */}

            
            <Congresspost/>
            </div>
        )
    }
}

export default StyleHunter;