import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.onDismiss} className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-30"></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 right-0 w-100 h-full z-40 overflow-scroll overscroll-none transition ease-in-out duration-1000">
        <div className="sticky top-0 border-b border-stone-400 text-stone-700 bg-stone-300">
          <Button type="button" className="p-3 hover:bg-slate-700 hover:text-white" onClick={props.onDismiss}><i className="bi-caret-left"></i> Back</Button>
        </div>
        {props.children}
       </div>
  );
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment className={classes.modal}>
      {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onDismiss={props.onDismiss}>{props.children}</ModalOverlay>, portalElement)}       
    </Fragment>
  );
};

export default Modal;