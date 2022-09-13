import SectionHeader from "../Layout/SectionHeader";
import Button from "../UI/Button";

const FilterForm = () => {
  return (
    <form className="text-white">
      <SectionHeader>Year (of reviews, not movies)</SectionHeader>
      <div id="year-filter" className="mb-5 mt-1 px-8">
        <p>
          <input type="checkbox" value="2019" id="2019" /> 2019
        </p>
        <p>
          <input type="checkbox" value="2020" id="2020" /> 2020
        </p>
        <p>
          <input type="checkbox" value="2021" id="2021" /> 2021
        </p>
        <p>
          <input type="checkbox" value="2022" id="2022" /> 2022
        </p>
      </div>
      
      <SectionHeader>Type</SectionHeader>
      <div id="type-filter" className="mb-5 mt-1 px-8">
        <p>
          <input type="checkbox" value="Movies" id="movies" /> Movies
        </p>
        <p>
          <input type="checkbox" value="TV-shows" id="shows" /> TV-shows
        </p>
      </div>

      <SectionHeader>Genre</SectionHeader>
      <div id="genre-filter" className="mb-5 mt-1 px-8">
        <p>
          <input type="checkbox" value="Action" id="action" /> Action
        </p>
        <p>
          <input type="checkbox" value="Adventure" id="adventure" /> Adventure
        </p>
        <p>
          <input type="checkbox" value="Thriller" id="thriller" /> Thriller
        </p>
        <p>
          <input type="checkbox" value="Horror" id="horror" /> Horror
        </p>
        <p>
          <input type="checkbox" value="Comedy" id="comedy" /> Comedy
        </p>
        <p>
          <input type="checkbox" value="Romance" id="romance" /> Romance
        </p>
        <p>
          <input type="checkbox" value="Sci-fi" id="sci-fi" /> Sci-fi
        </p>
        <p>
          <input type="checkbox" value="Naija" id="naija" /> Naija
        </p>
      </div>

      <SectionHeader>Author</SectionHeader>
      <div id="author-filter" className="mb-5 mt-1 px-8">
        <p>
          <input type="checkbox" value="Benza" id="benza"/> Benza
        </p>
      </div>  

      <Button type="submit" className="w-full px-8 py-2 mt-5 rounded-lg bg-slate-800 text-stone-300 text-lg font-bold shadow-xl">Filter Movies</Button>    
    </form>
  );
};

export default FilterForm