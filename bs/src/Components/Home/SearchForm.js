
const SearchForm = () => {
  return (
    <form>
      <input
        className="p-2 bg-gray-700"
        type="text"
        placeholder="What movie are you finding?"
      />
      <button className="inline-block p-2 bg-lime-700 font-bold">
        Find
      </button>
    </form>
  );
};

export default SearchForm;