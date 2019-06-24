import React from 'react';
import { postData } from '../../data';

class Congresspost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: postData,
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div>
            {
                data.map((item,id) =>{
                    return(
                        <div className="congresspost"  key={id}>
                            <img src={item.image} alt="congress" style={{width:'100%',height:'250px',marginTop:'15px'}}></img>
                                <div className="post-data">
                                    <span className="post-status">{item.status}</span>
                                    <span style={{marginLeft:"10px",marginRight:"10px"}}><i className="fas fa-eye"></i></span>
                                    <span >343.4K</span>   
                                    <h5 className="post-heading">{item.heading}</h5> 
                                    <p className="post-update">{item.update}</p> 
                                    <p className="post-content">{item.content}</p>
                                </div>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}

export default Congresspost;