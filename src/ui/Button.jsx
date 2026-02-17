import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled = false,
  to = "",
  type = "primary",
  onClick = () => {},
}) {
  const base =
    "inline-block text-sm cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-500 focus:bg-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:text-sm text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 lg:text-sm text-xs",
    secondary:
      "inline-block text-sm cursor-pointer rounded-full bg-transparent border-2 border-stone-300 font-semibold tracking-wide text-stone-500 uppercase transition-colors duration-300 hover:bg-stone-200 hover:text-stone-900 focus:bg-stone-300 focus:text-stone-900 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
