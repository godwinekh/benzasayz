const Link = (props) => {
  return (
    <a href={props.href} alt={props.alt} className={`active:focus:hover:text-amber-500 ${props.className}`}>{props.children}</a>
  );
};

export default Link;