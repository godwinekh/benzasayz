import React from "react";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import MovieProvider from "./store/MovieProvider";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Queried from "./pages/Queried";

const App = () => {
  return (
    <MovieProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} /> 
          <Route path="/reviews/search/:movieTitle" element={<Queried />} />
        </Routes>
      </Layout>
    </MovieProvider>
  );
};

export default App;
