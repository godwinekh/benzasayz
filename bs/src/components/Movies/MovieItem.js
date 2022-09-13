const MovieItem = (props) => {
  return (
    <div className="relative">
      <span className="absolute inset-x-1/3 -top-4 rounded-full text-sm font-semibold p-2 my-auto bg-yellow-600 text-gray-200 text-center">
        7.5
      </span>
      <a href="./">
        <img
          className="shadow-2xl mb-5"
          src={props.src}
          alt={props.title}
        />
      </a>
      <div className="px-1">
        <a href="./" className={`hover:text-yellow-600 ${props.styleTitle}`}>
          {props.title}
        </a>
       <p className="text-xs text-gray-400 mt-2">14 Aug 2022</p>
      </div>
      <div className="flex flex-wrap my-2">
        <p className="text-xs font-thin px-2 my-auto bg-gray-600 text-gray-100">
          action
        </p>
        <p className="text-xs font-thin px-2 my-auto bg-yellow-600 text-black">
          adventure
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
