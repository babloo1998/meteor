import React from 'react';
import StyleHunter from '../components/post/StyleHunter'
import Fashion from '../components/post/Fashion'
import Health from '../components/post/Health'
import Lifestyle from '../components/post/Lifestyle'
import Smallcard from '../components/post/Smallcard'
import Celebrity from '../components/post/Celebrity'
import Model from '../components/post/Model'
import Lifecare from '../components/post/Lifecare'
import Fashion1 from '../components/post/Fashion1'
import Smallcard1 from '../components/post/Smallcard1'
import Videos from '../components/post/Video'
import Socialcards from '../components/post/Socialcard'
import Popularpost from '../components/post/Popularpost'
import Instacard from '../components/post/Instacard'
import Instacard1 from '../components/post/Instacard1'
import Instacard2 from '../components/post/Instacard2'
import Instacard3 from '../components/post/Instacard3'

class Posts extends React.Component{
    render(){
        return(
            <div className="container" style={{maxWidth:'80%',marginTop:'50px'}}>
             <div className="row" style={{maxWidth:'100%'}}>
             <div className="col-lg-8 col-md-12 col-sm-12">
                <StyleHunter/>
                <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                   <Fashion/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                   <Health/>
                </div>
                </div>
                <Lifestyle/>
                <Smallcard/>
                <Celebrity/>
                <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                   <Model/>
                </div>
                <div className="col-lg-6 co-md-12 col-sm-12">
                   <Lifecare/>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-6 col-md-12 cool-sm-12">
                   <Fashion1/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                   <Smallcard1/>
                </div>
                </div>
               <Videos/>
               <Smallcard/>
               
             </div>
             <div className="col-lg-4 col-md-12 col-sm-12">
             <Socialcards/>
             <div style={{background:'white',padding:"10px",marginTop:"30px"}}>
             <Popularpost/>
             <Smallcard1/>
             </div>
             <Instacard/>
             <Instacard1/>
             <Instacard2/>
             <Instacard3/>
             
             </div>
             </div>
            </div>
        )
    }
}

export default Posts;