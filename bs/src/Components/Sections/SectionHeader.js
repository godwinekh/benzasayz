const SectionHeader = (props) => {
  return (
    <div className={`px-5 border-l-8 border-yellow-500 ${props.className}`}>
      <h2 className="text-3xl font-bold text-stone-300">{props.children}</h2>
    </div>
  );
};

export default SectionHeader;