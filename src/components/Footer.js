import React from 'react';
import Footercontent from './Footer/Footercontent'
import Footermenu1 from './Footer/Footermenu1'
import Footermenu2 from './Footer/Footercontent2';
import Footermenu3 from './Footer/Footercontent3';
import Footermenu4 from './Footer/Footermenu4'
class Footer extends React.Component{
    
    render(){
        return(
            <div className="footerwrapper" style={{background:'rgba(19,16,35,1)'}}>
             <div className="Footernav" style={{width:"80%",margin:'0 auto'}}>   
    <nav className="navbar navbar-expand-lg" style={{width:'80%',margin:'auto',padding:'0px',justifyContent:"spacecbetween"}}>
        <div>
        <a className="navbar-brand" href="/"><img src="https://i.ibb.co/1bHDfqn/footerlogo.png" alt="logo" style={{height:'70px'}}></img></a>
        </div>
        <div className="collapse navbar-collapse navbardata" id="navbarTogglerDemo03">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Fashion<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">stylehunter</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">Lifestyle</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">Celebrity</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">Videos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/" tabIndex="-1">Interview</a>
            </li>
            </ul>
        </div>
    </nav>
               
               
                {/* <Navbar>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Collapse className="mr-auto">
                    <Nav.Link href="#home">Business</Nav.Link>
                    <Nav.Link href="#features">Investing</Nav.Link>
                    <Nav.Link href="#pricing">Technology</Nav.Link>
                    <Nav.Link href="#pricing">Enterpenure</Nav.Link>
                    <Nav.Link href="#pricing">Leadership</Nav.Link>
                    <Nav.Link href="#pricing">Lifestyle</Nav.Link>
                    <Nav.Link href="#pricing">List</Nav.Link>
                </Navbar.Collapse>
                </Navbar> */}
                <hr style={{backgroundColor:'#1F232F',margin:'0'}}></hr>
                <div className="container" style={{paddingTop:'50px',color:'white',textAlign:"left",paddingBottom:"50px"}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 " style={{paddingRight:"50px"}} >
                            <Footercontent/>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                             <Footermenu1/>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                        <Footermenu2/>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <Footermenu3/>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                          <Footermenu4/>
                        </div>
                    </div>
                </div>
                <hr style={{backgroundColor:'#1F232F',margin:'0'}}></hr>
             </div>
            </div>
        )
    }
}

export default Footer;