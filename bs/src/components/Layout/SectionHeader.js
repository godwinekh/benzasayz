import React from "react";

const SectionHeader = (props) => {
  return (
    <div className={`px-5 border-l-8 border-yellow-500 text-stone-300 ${props.className}`}>
      <h2 className="font-bold capitalize">{props.children}</h2>
    </div>
  );
};

export default SectionHeader;