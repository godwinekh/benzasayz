import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';


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
      { switchPages && <Home homeLink={homePageHandler} reviewsLink={reviewsPageHandler} /> }
      { !switchPages && <Reviews homeLink={homePageHandler} /> }
    </React.Fragment>
  );
}

export default App;
