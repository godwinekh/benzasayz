
const Footer = (props) => {
  return (
    <section className={`${props.className}`} style={props.style}>
      <div className="bg-slate-800 bg-opacity-90 pt-20 -mt-2 text-stone-400 ">
        <div className="px-5 text-center text-white">
          <h2 className="text-xl">Community</h2>
          <p className="text-xs mt-2">Connect to enjoy more and receive notifications on updates</p>
          <div className="flex flex-row gap-3 pt-6 pb-8 justify-center">
            <a href="/" alt={'Instagram'}>Instagram</a>
            <a href="/" alt={'Instagram'}>WhatsApp</a>
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