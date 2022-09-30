import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <section className={styles['bg-image-footer']} style={{backgroundImage: "url(/Images/footer-bg.jpg)"}}>
      <div className="bg-slate-800 bg-opacity-90 pt-20 -mt-2 text-stone-400 ">
        <div className="px-5 text-center text-white">
          <h2 className="text-xl">Community</h2>
          <p className="text-xs mt-2 text-stone-400">Catch up on the latest movie news, trailers and reviews and download links all in the right places. Connect to enjoy more and receive notifications on updates</p>
          <div className="flex flex-row gap-10 pt-6 pb-8 justify-center my-10">
            <a href="/" target="_blank" alt={'Whatsapp'}><i className="bi-whatsapp text-2xl"></i></a>
            <a href="/" target="_blank" alt={'Instagram'}><i className="bi-instagram text-2xl"></i></a>
          </div>
        </div>

        <div className="py-5 bg-slate-700 bg-opacity-20">
          <p className="text-xs text-center">Copyright &copy; 2022 Benzasays | Developed by sangodzi </p>
        </div>        
      </div>
    </section>
  );
};

export default Footer;