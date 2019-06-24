import React from 'react';
import { smallcard } from '../../data'
class Smallcard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                data:smallcard
        }
    }
    render(){
           const {data} = this.state;
        return(
            <div className="news">
            {
                data.map((item,id)=>{
                    return(
                        <div className="smallcard"  key={id}>
                            <img src={item.image} alt="smallcard" style={{width:'60px',height:'60px'}}></img>
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

export default Smallcard;