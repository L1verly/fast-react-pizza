export default function FormError({ errorMessage }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <svg
        viewBox="0 0 24 24"
        className="size-6 min-w-6 fill-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <circle cx="12" cy="17" r="1" className="fill-red-600"></circle>
          <path
            d="M12 10L12 14"
            className="stroke-red-600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z"
            className="stroke-red-600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
      <p className="text-[0.8rem] font-bold text-red-600">{errorMessage}</p>
    </div>
  );
}
