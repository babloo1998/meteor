import React from 'react';

class Celebrity extends React.Component{
    render(){
        return(
            <div className="stylehunter">
                     <div className="stylehunternav">
                      <a className="navbar-brand" href="/">Celebrity</a>
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
           
            
            </div>
        )
    }
}

export default Celebrity;