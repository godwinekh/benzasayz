
const MoviePreview = (props) => {
  return (
    <div className={`${props.className} relative`} style={props.style}>
      <div className={`container p-5 bg-gradient-to-b from-transparent to-slate-900 absolute bottom-0`}>
        <h1 className="font-bold text-2xl">{props.title}</h1>
        <p className="py-5">{props.snapshot}</p>
        <div id="links" className="flex flex-row gap-2 items-center">
          <a href="/" alt={'rating'} className="bg-yellow-500 px-2 py-1 text-black font-bold text-lg">5.5</a>
          <a href="/" alt={'trailer on youtube'}>Watch</a>
          <a href="/" alt={'get download link'}>Download</a>
          <a href="/" alt={"read review button"} className="text-green-500">Read review</a>
        </div>
      </div>
    </div>
  );
};

export default MoviePreview;