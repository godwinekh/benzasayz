

const Input = (props) => {
  const { label, type, register, error } = props;

  return (
    <div className="pb-3 text-sm text-gray-800">
      <label htmlFor={label} className="pr-5 capitalize">
        {label}
      </label>
      <input
        type={type}
        className="px-2 py-2 w-full rounded-sm outline outline-1 outline-gray-200 focus:shadow-md "
        {...register(label)}
      />
     {error && <p className="text-red-600 py-2">{error?.message}</p>}
    </div>
  );
};


export const Textarea = (props) => {
  const { label, type, register, error } = props;

  return (
    <div className="pb-3 text-sm text-gray-800">
      <label htmlFor={label} className="pr-5 capitalize">
        {label}
      </label>
      <textarea
        type={type}
        className="px-2 py-2 w-full h-24 rounded-sm outline outline-1 outline-gray-200 focus:shadow-md "
        {...register(label)}
      />
     {error && <p className="text-red-600 py-2">{error?.message}</p>}
    </div>
  );
};
export default Input;
