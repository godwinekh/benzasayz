import { useEffect, useState } from "react";
import MovieDataForm from "./MovieDataForm";
import MovieInfo from "./MovieInfo";

const MovieEditables = (props) => {
  const [showInfo, setShowInfo] = useState(true);
  // const [isEditing, setIsEditing] = useState(false);
  const {movie} = props;

  useEffect(()=>{
    setShowInfo(true);
  }, [movie]);

  const editMovieHandler = () => {
    setShowInfo(false);
    // setIsEditing(true);
    console.log("Edit button is working")
  };

  const defaultContent = (
    <p className="text-center text-gray-700">
      Select a movie to view the movie, edit the review and tags or delete the
      movie.
    </p>
  );

  const isActive = movie ? true : false;

  return (
    <div className={props.className}>
      <div className="py-10">
        {!isActive && defaultContent}
        {showInfo && isActive && <MovieInfo activeMovie={movie} onEdit={editMovieHandler} />}
        {!showInfo && <MovieDataForm movie={movie} />}
      </div>
    </div>
  );
};

export default MovieEditables;
