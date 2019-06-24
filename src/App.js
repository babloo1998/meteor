import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import './scss/style.css';
import Banner from './components/Banner';
import Posts from './components/Posts'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
    <Navigation/> 
    <Banner/>  
    <Posts/>
    <Footer/>
    </div>
  );
}

export default App;
