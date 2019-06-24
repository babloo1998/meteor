import React from 'react';
import {bannerData} from '../data';

class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                data:bannerData
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div className="bannerwrapper">
            {
                data.map((item,id) =>{
                    return(
                        <div className="banner" key={id}>
                            <div className="bannerinner" style = {{background: `url(${item.image}),${item.gradient}`, width:'100%'}}>
                               <div className="bannercontentwrapper" style={{background:`${item.gradient}`,height:'500px'}}>
                               <div className="bannercontent">
                                    <span className="status" style={{background:`${item.background}`}}>{item.status}</span>
                                    <span style={{color:"white",marginLeft:"10px",marginRight:"10px"}}><i className="fas fa-eye"></i></span>
                                    <span style={{color:"white",fontWeight:"500"}}>343.4K</span>
                                    <p className="data">{item.data}</p> 
                                    <p className="update">{item.update}</p>
                               </div>
                               </div>    
                             </div>
                        </div>    
                    )
                }
                )}
            </div>
        )
    }
}

export default Banner;