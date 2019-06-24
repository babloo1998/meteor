import React from 'react';
import { instacard1 } from '../../data'
class Instacard extends React.Component{
    constructor(props){
       super(props);
       this.state = {   
           data:instacard1
       } 
    }
    render(){
        const {data} = this.state;
        return(
            <div className="instacardwrapper">
          {
              data.map((item,id)=>{
                  return(

                      <div className="instacard"  key={id}>
                      <img src={item.image} alt="instacard1" style={{width:"100%",height:"300px"}}></img>
                        <div>
                            <h6>{item.heading}</h6>
                            <p>{item.content}</p>
                        </div>
                      </div>
                  )
              })
          }
            
            </div>
        )
    }
}

export default Instacard;