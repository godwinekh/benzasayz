import React, { useState } from "react";
import Button from "../UI/Button";
import Filter from "./Filter";


const SubPanel = () => {
  const [useFilter, setUseFilter] = useState(false);

  const displayFilterHandler = () => {
    setUseFilter(true);
  };
  
  const hideFilterHandler = () => {
    setUseFilter(false);
  };

  return (
    <React.Fragment>
      <div className="fixed top-40 left-0 right-0 flex flex-row pl-5 pb items-center bg-slate-900 text-white">
        <p className="flex-grow text-sm">Showing 0 of 0 entries</p>
        <Button type="button" className="py-1 px-5 align-middle" onClick={displayFilterHandler}><i className="bi-filter-right text-xl"></i> Filter</Button>
      </div>

      {useFilter && <Filter onDismiss={hideFilterHandler} />}
    </React.Fragment>
  );
};

export default SubPanel;