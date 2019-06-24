import React from 'react';

class Videos extends React.Component{
    render(){
        return(
            <div className="stylehunter">
                 <div className="stylehunternav">
             <a className="navbar-brand" href="/">Videos</a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/">World</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Food</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Animal</a>
                </li>
            </ul>
            </div>
           
           <div className="wrapper">
                <div className="h_iframe">
                <iframe frameBorder='0' title="unique title" height='360px' style={{marginTop:'25px'}} width='640px' scrolling='no' src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
                  allowFullScreen></iframe>
            </div>
</div> 

            </div>
        )
    }
}

export default Videos;