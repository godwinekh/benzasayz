import MoviePreview from "../Movies/MoviePreview";

const NewReviews = (props) => {
  return (
    <section className="pt-8 bg-gray-700 -mt-1">
      <div className="px-5 mb-8 border-l-8 border-gray-900">
        <h2 className="text-3xl font-bold text-stone-300">New Reviews</h2>
      </div>

      <MoviePreview
        className={props.className}
        title="Morbius"
        rating="4.0"
        snapshot="The movie was just there. Nothing really special or so fun about it."
        style={{ backgroundImage: "url(/Images/morbius.jpg)" }}
      />
      <MoviePreview
        className={props.className}
        title="Scream"
        rating="5.2"
        snapshot="The movie was just there. Nothing really special or so fun about it."
        style={{ backgroundImage: "url(/Images/scream.jpg)" }}
      />
      <MoviePreview
        className={props.className}
        title="Uncharted"
        rating="4.0"
        snapshot="The movie was just there. Nothing really special or so fun about it."
        style={{ backgroundImage: "url(/Images/uncharted.png)" }}
      />
    </section>
  );
};

export default NewReviews;
