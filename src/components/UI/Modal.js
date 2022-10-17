import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const Backdrop = (props) => {
  return (
    <div onClick={props.dismiss} className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-30"></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-1/2 lg:w-2/5 h-full z-40 overflow-scroll overscroll-none transition ease-in-out duration-1000">
        <div className="sticky top-0 border-b border-stone-400 text-stone-700 bg-stone-300">
          <button type="button" className="p-3 hover:bg-slate-700 hover:text-white" onClick={props.onClose}><i className="bi-caret-left"></i> Close</button>
        </div>
        {props.children}
       </div>
  );
}

const ConsoleModalOverlay = (props) => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-28 w-2/3 z-40">
        <Card>
          <div className="max-h-96 overflow-y-auto overscroll-auto text-justify pr-2">{props.children}</div>
          <div className="flex justify-center">
          <button className="bg-slate-800 text-stone-200 px-5 py-2 mt-10" onClick={props.onClose}>Close</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export const ConsoleModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop dismiss={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ConsoleModalOverlay onClose={props.onClose}>{props.children}</ConsoleModalOverlay>, portalElement)}       
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop dismiss={props.onDismiss} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onDismiss}>{props.children}</ModalOverlay>, portalElement)}       
    </div>
  );
};

export default Modal;