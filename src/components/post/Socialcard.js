import React from 'react';
import { socialcards } from '../../data'
class Socialcards extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                data:socialcards
            }
    }
    render(){
        const {data} = this.state;
        return(
            <div className="socialcards-wrapper">
                {
                    data.map((item,id)=>{
                        return(
                            <div className="socialcards"  key={id} style={{background:`${item.background}`}}>
                            <i className={item.icon}  style={{background:`${item.iconcolor}`}}></i>
                            <p className="followers">{item.Followers}</p>
                            <p className="tags">{item.tags}</p>
                            </div>
                        )
                    })
                }
         
            </div>
        )
    }
}

export default Socialcards;