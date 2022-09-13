import Button from "../UI/Button";
import Modal from "../UI/Modal";

const MovieReview = (props) => {
  return (
    <Modal onDismiss={props.onDismiss}>
      <div className="bg-gray-900 text-gray-100">
        <img className="" src={"/Images/uncharted.png"} alt={""} />

        <div className="flex flex-row justify-between font-bold text-xl p-3">
          <h3 className="capitalize text-lg">Movie title goes here</h3>
          <p className="text-amber-500"><i className="bi-star mr-1"></i> 7.4</p>
        </div>

        <div className="p-3 bg-gray-100 text-stone-700">
          <div className="leading-relaxed capitalize py-3">
            <p>release date: 1 Sept 2022 <span></span></p>
            <p>genre: action | adventure | horror</p>
            <p className="leading-5">starring: Tom Holland, Mark Wahlberg, Sophia Ali, Tati Gabrielle, Antonio Banderas </p>
          </div>

          <div className="flex flex-row gap-5 justify-evenly py-8 items-end">
            <div className="text-center">
              <a href="/"><i className="bi-youtube text-5xl text-red-600"></i></a>
              <p className="mt-2">Watch Trailer</p>
            </div>
            <div className="text-center">
              <a href="/"><i className="bi-box-arrow-down text-4xl text-stone-700"></i></a>
              <p className="mt-3">Download</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-10 bg-slate-700 text-gray-100">
          <h3 className="pb-3 font-bold text-lg">Benza says:</h3>
          <p>Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkins, Art Marcum, and Matt Holloway, based on the video game franchise of the same name developed by Naughty Dog and published by Sony Interactive Entertainment. It stars Tom Holland as Nathan Drake and Mark Wahlberg as Victor Sullivan, with Sophia Ali, Tati Gabrielle, and Antonio Banderas in supporting roles. In the film, Drake is recruited by Sullivan in a race against corrupt billionaire Santiago Moncada (Banderas) and mercenary leader Jo Braddock (Gabrielle) to locate the fabled treasure of the Magellan expedition.</p>
        </div>
      </div>
    </Modal>
  );
};

export default MovieReview;