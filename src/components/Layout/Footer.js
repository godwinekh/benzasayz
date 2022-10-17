import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <section className={styles['bg-image-footer']} style={{backgroundImage: "url(/Images/footer-bg.jpg)"}}>
      <div className="bg-slate-800 bg-opacity-90 pt-20 -mt-2 text-stone-400 ">
        <div className="px-5 text-center text-white">
          <h2 className="text-xl">Community Channels</h2>
          <p className="text-xs mt-2 text-stone-400">Catch up on the latest movie news, trailers and reviews and download links all in the right places. Connect to enjoy more and receive notifications on updates</p>
          <p className="text-xs mt-8 text-stone-300">For reviews: Instagram</p>
          <p className="text-xs mt-2 text-stone-300">For requests &amp; download-links: WhatsApp</p>
          <p className="text-xs mt-2 text-stone-300">For actual downloads: Telegram</p>
          <div className="flex flex-row gap-10 pt-6 pb-8 justify-center mb-10">
            <a href="https://chat.whatsapp.com/G0EK5XFPNbf6eC48sjezkA" rel="noreferrer" target="_blank" alt="Whatsapp"><i className="bi-whatsapp text-2xl"></i></a>
            <a href="https://www.instagram.com/benzasayz/" target="_blank" rel="noreferrer" alt="Instagram"><i className="bi-instagram text-2xl"></i></a>
            <a href="https://t.me/bsmovielinks" target="_blank" rel="noreferrer" alt="Telegram"><i className="bi-telegram text-2xl"></i></a>
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