export default function FormInput({
  id,
  type,
  name,
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  required = true,
  defaultValue = "",
  disabled = false,
}) {
  const props = {
    type,
    name,
    disabled,
    id,
    ...(placeholder && { placeholder: placeholder }),
    ...(value && { value: value }),
    ...(onChange && { onChange: onChange }),
    ...(defaultValue && { defaultValue: defaultValue }),
    className:
      "rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none md:px-6 md:py-3 " +
      className,
  };
  return required ? <input required {...props} /> : <input {...props} />;
}
