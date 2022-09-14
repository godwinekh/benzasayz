import React from "react";
import Modal from "../UI/Modal";
import FilterForm from "./FilterForm";

const Filter = (props) => {
  return (
    <Modal onDismiss={props.onDismiss}>
      <div className="py-5 px-5 bg-gray-700">
        <h2 className="text-yellow-500 mb-3">Filter By:</h2>
        <FilterForm />
      </div>
    </Modal>
  );
};

export default Filter;