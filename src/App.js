import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MovieProvider from "./store/MovieProvider";
import AuthProvider from "./store/AuthProvider";
import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import store from "./store/console";
import "./App.css";

const Reviews = React.lazy(() => import("./pages/Reviews"));
const MovieReview = React.lazy(() => import("./components/Movies/MovieReview"));
const Queried = React.lazy(() => import("./pages/Queried"));
const Uploads = React.lazy(() => import("./pages/Uploads"));
const UploadAuth = React.lazy(() => import("./components/Uploads/UploadAuth"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <MovieProvider>
      <Layout>
        <Suspense fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home/movies/:movieId" element={<MovieReview />} />
            </Route>
            <Route path="/reviews" element={<Reviews />}>
              <Route path="/reviews/movies/:movieId" element={<MovieReview />} />
            </Route>
            <Route path="/reviews/search/:movieTitle" element={<Queried />} />
            <Route
              path="/console/uploads"
              element={
                <AuthProvider>
                  <Provider store={store}>
                    <Uploads />
                  </Provider>
                </AuthProvider>
              }
            />
            <Route
              path="/console/admin/authenticate-user"
              element={<AuthProvider><UploadAuth /></AuthProvider>}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </MovieProvider>
  );
};

export default App;
