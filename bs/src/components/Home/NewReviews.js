import MoviePreview from "../Movies/MoviePreview";
import SectionHeader from "../Layout/SectionHeader";
import Button from "../UI/Button";

const NewReviews = (props) => {
  return (
    <section className="pt-8 bg-gray-700 -mt-1">
      <SectionHeader className="mb-8 text-3xl">New Reviews</SectionHeader>
      <div className="md:grid gap-7 md:grid-cols-2 lg:grid-cols-5 md:mb-10 md:px-5">
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
      </div>

      <div className="bg-slate-900 pt-10 p-5 text-center">
        <Button onClick={props.reviewsLink} className="px-3 py-2 text-yellow-500 rounded-lg" >More Reviews <i className="bi-arrow-right"></i></Button>
      </div>
    </section>
  );
};

export default NewReviews;
