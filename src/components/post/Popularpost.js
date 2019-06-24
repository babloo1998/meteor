import React from 'react';
import { popularpost } from '../../data';

class Popularpost extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           data:popularpost
       }
   }
    render(){
        const { data } = this.state;
        return(
            <div className="popularpostwrapper">
             {
                 data.map((item,id) =>{
                     return(
                         <div className="popularpost"  key={id}>
                              <h5>{item.Heading}</h5>
                              <div style={{position:'relative'}}>
                              <img src = {item.image} alt="popularpost" style={{width:"100%"}}></img>
                              <div className="content" style={{position:'absolute',bottom:'0'}}>
                                  <p className="status" style={{background:`${item.background}`}}>{item.status}</p>
                                  <h6>{item.posthead}</h6>
                                  <p>{item.update}</p>
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

export default Popularpost;