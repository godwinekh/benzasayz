import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import { ConsoleModal } from "../UI/Modal";
import ImageChanger from "./ImageChanger";
import MovieActions from "./MovieActions";

const MovieInfo = () => {
  const activeMovie = useSelector(state => state.console.activeMovie);
  const [viewSynopsis, setViewSynopsis] = useState(false);
  const [viewReview, setViewReview] = useState(false);
  const [editImages, setEditImages] = useState(false);

  const toggleSynopsisHandler = () => {
    setViewSynopsis(prevState => !prevState);
  };

  const toggleReviewHandler = () => {
    setViewReview(prevState => !prevState);
  };
  
  const toggleEditImagesHandler = () => {
    setEditImages(prevState => !prevState);
  };

  return (
    <Fragment>
    <Card className="text-gray-700">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="grow text-2xl capitalize font-bold">
            {activeMovie.title}
          </h2>
          <p>Rating: {activeMovie.rating}</p>
        </div>
        <div className="py-2 flex gap-8">
          <button className="font-bold" onClick={toggleSynopsisHandler}><i className="bi-card-text pr-1"></i> View synopsis</button>
          {viewSynopsis && <ConsoleModal onClose={toggleSynopsisHandler} heading="Movie Synopsis"><article>{activeMovie.synopsis}</article></ConsoleModal>}
          <button className="font-bold" onClick={toggleReviewHandler}><i className="bi-card-text pr-1"></i> View review</button>
          {viewReview && <ConsoleModal onClose={toggleReviewHandler} heading="Movie Review"><article>{activeMovie.review}</article></ConsoleModal>} 
          <button className="font-bold" onClick={toggleEditImagesHandler}><i className="bi-image pr-1"></i> Open Image Changer</button>
          {editImages && <ImageChanger onClose={toggleEditImagesHandler} />}
        </div>
      </div>

      <div className="py-2 capitalize">
        <h2 className="my-5 py-1 w-full border-b border-stone-200 bg-stone-100 text-center rounded-md">
          Movie Information
        </h2>
        <div className="px-5">
          <p>
            <span className="pr-1 font-bold">Release Date: </span>
            {activeMovie.releaseDate}
          </p>
          <p>
            <span className="pr-1 font-bold">Cast: </span>
            {activeMovie.cast}
          </p>
          <p>
            <span className="pr-1 font-bold">Genre: </span>
            {activeMovie.genre}
          </p>
          <p>
            <span className="pr-1 font-bold">tags: </span>
            {activeMovie.tags}
          </p>
        </div>
      </div>

      <div className="py-2">
        <h2 className="my-5 py-1 w-full border-b border-stone-200 bg-stone-100 text-center rounded-md">
          Links
        </h2>
        <div className="px-5">
          <div>
            <p className="font-bold">Trailer</p>
            <span className="pr-3">{activeMovie.trailer}</span>
          </div>
          <div className="pt-4">
            <p className="font-bold">Download links</p>
            <span className="pr-3">{activeMovie.download ? activeMovie.download : "No download link is available for this movie"}</span>
          </div>
        </div>
      </div>
    </Card>
    <MovieActions />  
    </Fragment>
  );
};

export default MovieInfo;
