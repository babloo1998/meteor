import React from 'react';
import { footercontent } from '../../data'
import Footersocial from '../Footer/Footersocial'
class Footercontent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:footercontent
        }
    }
    
    render(){
        const { data } = this.state;
        return(
            <div className="footercontentwrapper">
             {
                 data.map((item,id)=>{
                     return(
                         <div className="footercontent"  key={id}>
                         <p style={{fontSize:"15px"}}>{item.content}</p>
                         </div>
                     )
                 })
             }
             <Footersocial/>
            </div>
        )
    }
}

export default Footercontent;