import React from 'react';
import { socialcardsfooter } from '../../data'
class Footersocial extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:socialcardsfooter
        }
    }
    
    render(){
        const { data } = this.state;
        return(
            <div className="footersocialcard">
             {
                 data.map((item,id)=>{
                     return(
                         <div className="footersocialcard"  key={id}>
                            <div className="row">
                                <div className="col-lg-2">
                                    <i className={item.icon} style={{padding:"15px",background:`${item.background}`}}></i>
                                </div>
                            </div>
                         </div>
                     )
                 })
             }
            </div>
        )
    }
}

export default Footersocial;