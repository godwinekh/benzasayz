import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Reviews from './components/Reviews/Reviews';


function App() {
  const [switchPages, setSwitchPages] = useState(true);

  const reviewsPageHandler = () => {
    setSwitchPages(false);
  };
  
  const homePageHandler = () => {
    setSwitchPages(true);
  };

  return (
    <React.Fragment>
      <Header homeLink={homePageHandler}/>
      <main className='bg-gradient-to-b from-gray-800 to-slate-900'>
        { switchPages && <Home reviewsLink={reviewsPageHandler} /> }
        { !switchPages && <Reviews /> }
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
