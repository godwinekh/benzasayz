const Card = (props) => {
  return (
    <div className="w-full px-3 md:px-0 md:w-4/5 lg:w-3/5 md:mx-auto">
      <div className={`bg-white shadow-lg py-7 px-10 md:px-16 rounded-lg ${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Card;
