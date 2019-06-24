import React from 'react';
import PrimaryNav from './PrimaryNav';
import SecondryNav from './SecondryNav';

class Navigation extends React.Component{
    render(){
        return(
            <div className="Navigation">
             <PrimaryNav/>
             <SecondryNav/>
            </div>
        )
    }
}

export default Navigation;