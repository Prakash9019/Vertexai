// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";

// export function Button({
//   children,
//   variant = "default",
//   size = "md",
//   className = "",
//   ...props
// }) {
//   const baseStyles = "inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//     outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
//     ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-300",
//     secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
//   };

//   const sizes = {
//     sm: "px-2 py-1 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//     icon: "p-2",
//   };

//   return (
//     <button
//       className={classNames(baseStyles, variants[variant], sizes[size], className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   variant: PropTypes.oneOf(["default", "outline", "ghost", "secondary"]),
//   size: PropTypes.oneOf(["sm", "md", "lg", "icon"]),
//   className: PropTypes.string,
// };
