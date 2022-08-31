
const MoviePreview = (props) => {

  let ratingColor;

  if (props.rating < 4.5) {
    ratingColor = 'bg-red-500 text-gray-100';
  } else if (props.rating < 7) {
    ratingColor = 'bg-yellow-500 text-gray-900';
  } else if (props.rating >= 7) {
    ratingColor = 'bg-lime-700 text-gray-100';
  }

  return (
    <div className={`${props.className} relative`} style={props.style}>
      <div className={`container p-5 bg-gradient-to-b from-transparent to-slate-900 absolute bottom-0`}>
        <h1 className="font-bold text-2xl">{props.title}</h1>
        <p className="py-5">{props.snapshot}</p>
        <div id="links" className="flex flex-row gap-2 items-center">
          <a href="/" alt={'rating'} className={`${ratingColor} px-2 py-1 font-bold text-lg`}>{props.rating}</a>
          <a href="/" alt={'trailer on youtube'}>Watch</a>
          <a href="/" alt={'get download link'}>Download</a>
          <a href="/" alt={"read review button"} className="text-green-500">Read review</a>
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;