import React from 'react';
import {footermenu} from '../../data'
class Footermenu4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:footermenu
        }
    }
    
    render(){
        const { data } = this.state;
        return(
            <div className="footermenu wrapper">
             {
                 data.map((item,id)=>{
                     return(
                         <div className="footermenu"  key={id}>
                         <p style={{marginBottom:"0px",fontSize:"15px"}}>{item.title4}</p>
                         </div>
                     )
                 })
             }
            </div>
        )
    }
}

export default Footermenu4;