import { Link } from "react-router-dom";

export default function Button({ children, disabled = false, to = "" }) {
  const className =
    "inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}
