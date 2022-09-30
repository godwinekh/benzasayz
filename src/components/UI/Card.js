const Card = (props) => {
  return (
    <div className="w-3/5 mx-auto">
      <div className={`bg-white shadow-lg py-7 px-16 rounded-lg ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Card;
