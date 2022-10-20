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
import { Provider } from "react-redux";
import store from "./store/console";

const App = () => {
  return (
    <MovieProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/search/:movieTitle" element={<Queried />} />
            <Route
              path="/console/uploads"
              element={
                <Provider store={store}>
                  <Uploads />
                </Provider>
              }
            />
            <Route
              path="/console/admin/authenticate-user"
              element={<UploadAuth />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </MovieProvider>
  );
};

export default App;
