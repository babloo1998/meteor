import React from 'react';
import { smallcard1 } from '../../data'
class Smallcard1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                data:smallcard1
        }
    }
    render(){
           const {data} = this.state;
        return(
            <div className="news">
            {
                data.map((item,id)=>{
                    return(
                        <div className="smallcard"  key={id} style={{width:'100%',marginBottom:'13px'}}>
                            <img src={item.image} alt="smallcard1" style={{width:'60px',height:'60px'}}></img>
                            <div className="smallcard-content">    
                                <h5>{item.heading}</h5>
                                <p>{item.update}</p>
                            </div>
                        </div>
                    )
                })
            }        
            </div>
        )
    }
}

export default Smallcard1;