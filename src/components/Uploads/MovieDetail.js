const MovieDetail = (props) => {
  const {label, value} = props;

  return (
    <div className="flex flex-row gap-10 justify-between py-3 text-sm text-gray-800 border">
      <label htmlFor={label} className="basis-1/4 capitalize">{label}:</label>
      <p className="basis-3/4 px-5 rounded-sm border-l">
        {value}
      </p>
    </div>
  );
};

export default MovieDetail;
