import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div onClick={props.onDismiss} className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-30"></div>
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

const EmbedBackdrop = (props) => {
  return (
    <div onClick={props.dismiss} className="fixed w-full h-full lg:-bottom-5 lg:-left-5 lg:w-2/5 lg:h-3/5 bg-gradient-to-r from-stone-900 to-black bg-opacity-90 z-30"></div>
  );
};

const EmbedModalOverlay = (props) => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-32 lg:top-auto lg:bottom-5 lg:left-9 w-full md:w-4/5 md:h-3/7 lg:w-1/3 lg:h-1/2 z-40">
        <div className="relative mx-auto">
          <button type="button" className="absolute -top-4 -right-4 text-3xl text-stone-200" onClick={props.onClose}><i className="bi-x-circle-fill"></i></button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export const EmbedModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<EmbedBackdrop dismiss={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<EmbedModalOverlay onClose={props.onClose}>{props.children}</EmbedModalOverlay>, portalElement)}       
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onDismiss}>{props.children}</ModalOverlay>, portalElement)}       
    </div>
  );
};

export default Modal;