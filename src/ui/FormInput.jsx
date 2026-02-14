export default function FormInput({
  type,
  name,
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className={
        "w-full rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none md:px-6 md:py-3 " +
        className
      }
    />
  );
}
