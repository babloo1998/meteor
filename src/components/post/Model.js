import React from 'react';
import { cardData3 } from '../../data'
class Model extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                data:cardData3
        }
    }
    render(){
           const {data} = this.state;
        return(
            <div className="fashion">
            {
                data.map((item,id) =>{
                    return(
                        <div className="card" key={id}  style={{marginTop:'50px'}}>
                        <img src={item.image} alt="model" style={{width:'100%'}}></img>
                        <div className="card-data">
                            <p className="card-status">{item.status}</p>
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

export default Model;