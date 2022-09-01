import Link from "../UI/Link";

const MovieThumbnail = (props) => {
  return (
    <div className="border border-gray-600 rounded-r-xl shadow-xl bg-gray-700 text-stone-300 mb-3">
      <img className="inline w-16" src={"/Images/scream.jpg"} alt={"trial"} />
      <div className="inline-block align-middle px-5">
        <Link href={props.href} className="capitalize text-lg">Scream</Link>
        <p className="text-xs">August 4, 2022</p>
      </div>
    </div>
  );
};

export default MovieThumbnail;