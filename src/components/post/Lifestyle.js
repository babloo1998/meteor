import React from 'react';
import Congresspost1 from './Congresspost1'

class Lifestyle extends React.Component{
    render(){
        return(
            <div className="stylehunter" style={{marginTop:'40px'}}>
                 <div className="stylehunternav">
               <a className="navbar-brand" href="/">Lifestyle</a>
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
             
            <Congresspost1/>
            </div>
        )
    }
}

export default Lifestyle;