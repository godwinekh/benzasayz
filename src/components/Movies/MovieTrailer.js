import { EmbedModal } from "../UI/Modal";

const MovieTrailer = (props) => {
  return (
    <EmbedModal onClose={props.onClose}>
      <iframe
        className="w-full h-80 md:h-96 lg:h-full"
        src={props.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </EmbedModal>
  );
};

export default MovieTrailer;
