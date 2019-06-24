import React from 'react';
import { instacard } from '../../data'
class Instacard extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           data:instacard
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
                      <img src={item.image} alt="instacard" style={{width:"100%",height:"300px"}}></img>
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