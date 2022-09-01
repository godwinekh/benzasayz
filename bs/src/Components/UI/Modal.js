import React from "react";
import Backdrop from "./Backdrop";
import Button from "./Button";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
       
       <div className="fixed top-0 right-0 w-100 h-full z-40 overflow-scroll overscroll-none transition ease-in-out duration-1000">
        <div className="sticky top-0 border-b border-stone-400 text-stone-700 bg-stone-300">
          <Button type="button" className="p-3 hover:bg-slate-700 hover:text-white" onClick={props.onDismiss}><i className="bi-caret-left"></i> Back</Button>
        </div>
        {props.children}
       </div>
    </React.Fragment>
  );
};

export default Modal;