import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Reviews from './components/Reviews/Reviews';
import MovieProvider from './store/MovieProvider';


function App() {
  const [switchPages, setSwitchPages] = useState(true);

  const reviewsPageHandler = () => {
    setSwitchPages(false);
  };
  
  const homePageHandler = () => {
    setSwitchPages(true);
  };

  return (
    <MovieProvider>
      <Header homeLink={homePageHandler}/>
      <main className='bg-gradient-to-b from-gray-800 to-slate-900'>
        { switchPages && <Home reviewsLink={reviewsPageHandler} /> }
        { !switchPages && <Reviews /> }
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
