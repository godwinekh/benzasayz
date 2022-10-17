import React from "react";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import MovieProvider from "./store/MovieProvider";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Queried from "./pages/Queried";
import Uploads from "./pages/Uploads";
import AuthProvider from "./store/AuthProvider";
import UploadAuth from "./components/Uploads/UploadAuth";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <MovieProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} /> 
          <Route path="/reviews/search/:movieTitle" element={<Queried />} />
          <Route path="/console/uploads" element={<AuthProvider><Uploads /></AuthProvider>} />
          <Route path="/console/admin/authenticate-user" element={<AuthProvider><UploadAuth /></AuthProvider>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </MovieProvider>
  );
};

export default App;
