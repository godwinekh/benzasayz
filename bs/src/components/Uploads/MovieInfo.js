import Card from "../UI/Card";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MovieInfo = (props) => {
  const { activeMovie, onEdit } = props;

  const date = new Date(activeMovie["release date"]);
  let month = months[date.getMonth()];
  const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <Card className="text-gray-700">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="grow text-3xl capitalize font-bold">
            {activeMovie.title}
          </h2>
          <p>Rating: {activeMovie.rating}</p>
        </div>
        <p className="px-1 py-2">{activeMovie.synopsis}</p>
        <div className="px-1 py-2">
          <p className="font-bold">Bs review:</p>
          <p>{activeMovie.review}</p>
        </div>
      </div>

      <div className="py-2 capitalize">
        <h2 className="my-5 py-1 w-full border-b border-stone-200 bg-stone-100 text-center rounded-md">
          Movie Information
        </h2>
        <div className="px-5">
          <p>
            <span className="pr-5">Release Date: </span>
            {formattedDate}
          </p>
          <p>
            <span className="pr-5">Cast: </span>
            {activeMovie.cast}
          </p>
          <p>
            <span className="pr-5">Genre: </span>
            {activeMovie.genre}
          </p>
          <p>
            <span className="pr-5">tags: </span>
            {activeMovie.id}
          </p>
        </div>
      </div>

      <div className="py-2">
        <h2 className="my-5 py-1 w-full border-b border-stone-200 bg-stone-100 text-center rounded-md">
          Links
        </h2>
        <div className="px-5">
          <p>
            <span className="pr-3">{activeMovie.trailer}</span> (trailer)
          </p>
          <p>
            <span className="pr-3">{activeMovie.download}</span> (download)
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <button
          onClick={onEdit}
          className="bg-red-900 text-white px-7 py-2 rounded-sm"
        >
          Edit
        </button>
      </div>
    </Card>
  );
};

export default MovieInfo;
