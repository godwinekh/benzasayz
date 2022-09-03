
const SearchForm = (props) => {
  return (
    <div className={props.className}>
      <form className="text-white flex justify-center">
        <input
          className="p-2 bg-gray-700 md:w-3/4 hover:outline-none focus:outline-none active:outline-none"
          type="text"
          placeholder="What movie are you finding?"
        />
        <button className="inline-block py-2 px-3 bg-slate-900 font-bold">
          <i className="bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;