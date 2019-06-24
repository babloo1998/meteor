import React from 'react';
import { cardData2 } from '../../data'
class Health extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                data:cardData2
        }
    }
    render(){
           const {data} = this.state;
        return(
            <div className="health">
            {
                data.map((item,id) =>{
                    return(
                        <div className="card"  key={id}>
                            <img src={item.image} alt="health" style={{width:'100%'}}></img>
                            <div className="card-data">
                                <p className="card-status" style={{background:`${item.background}`}}>{item.status}</p>
                                <h5 className="card-heading">{item.heading}</h5>
                                <p className="card-update">{item.update}</p>
                                <p className="card-content">{item.content}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Health;