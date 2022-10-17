import React, { useState } from "react";
import Button from "../UI/Button";
import Filter from "./Filter";

const SubPanel = (props) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const { total, upper, lower } = props;

  const toggleFilterMenu = () => {
    setShowFilterMenu(prev => !prev);
  };

  return (
    <React.Fragment>
      <div className="fixed top-40 lg:top-16 lg:pt-4 lg:pb-2 left-0 right-0 flex flex-row pl-5 items-center bg-slate-900 text-white z-20">
        <p className="flex-grow text-sm">{`Showing ${lower} - ${upper} of ${total} reviews`}</p>
        <Button
          type="button"
          className="py-1 px-5 align-middle text-gray-500 cursor-not-allowed"
          onClick={toggleFilterMenu}
          disabled
        >
          <i className="bi-filter-right text-xl"></i> Filter
        </Button>
      </div>

      {/* {showFilterMenu && <Filter onDismiss={toggleFilterMenu} />} */}
    </React.Fragment>
  );
};

export default SubPanel;
