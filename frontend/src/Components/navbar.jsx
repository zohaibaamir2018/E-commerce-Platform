// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FiMenu,
//   FiX,
//   FiShoppingCart,
//   FiLogIn,
//   FiSearch,
//   FiLogOut,
// } from "react-icons/fi";
// import Cookies from "js-cookie";

// const Navbar = ({ cartlength, clearCart }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userRole, setUserRole] = useState("");
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const temp = Cookies.get("userRole");
//     setToken(Cookies.get("token1"));
//     console.log(Cookies.get("token1"));

//     setUserRole(temp);

//     console.log(temp);
//   });

//   return (
//     <nav className="flex items-center justify-between lg:px-10 md:px-4 px-4 md:py-8 py-6 bg-white">
//       <div className="flex items-center">
//         <div
//           className="flex items-center"
//           data-aos="flip-up"
//           data-aos-duration="2000"
//         >
//           <Link to="/">
//             <img
//               src="/img/logo.png"
//               alt="Phlox Furniture"
//               className="h-[45px]"
//             />{" "}
//           </Link>
//         </div>

//         <div className="hidden md:flex h-8 border-l border-gray-300 mx-6" />

//         <div
//           className="flex gap-8 text-lg"
//           data-aos="flip-up"
//           data-aos-duration="2000"
//         >
//           <Link to="/" className="hidden md:flex text-text hover:text-hover">
//             Home
//           </Link>
//           <Link
//             to="/allproduct"
//             className="hidden md:flex text-text hover:text-hover"
//           >
//             Product
//           </Link>
//           <Link
//             to="/about"
//             className="hidden md:flex text-text hover:text-hover"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="hidden md:flex text-text hover:text-hover"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       <div
//         className="flex items-center text-lg justify-end gap-4"
//         data-aos="flip-up"
//         data-aos-duration="2000"
//       >
//         {console.log(userRole)}
//         {userRole != "" && userRole != undefined && userRole == "seller" && (
//           <Link
//             to="/addproduct"
//             className="hidden md:flex items-center gap-1 text-text hover:text-hover"
//           >
//             <FiLogIn className="w-5 h-5" />
//             Add Product
//           </Link>
//         )}
//         <div className="hidden md:flex h-8 border-l border-gray-300 mx-1" />
//         {token ? (
//           <Link
//             onClick={() => {
//               Cookies.remove("token1");
//               clearCart();
//             }}
//             to="/login" // You can replace this with the actual logout route or function
//             className="hidden md:flex items-center gap-1 text-text hover:text-hover"
//           >
//             <FiLogOut className="w-5 h-5" />
//             Logout
//           </Link>
//         ) : (
//           <Link
//             to="/login"
//             className="hidden md:flex items-center gap-1 text-text hover:text-hover"
//           >
//             <FiLogIn className="w-5 h-5" />
//             Login
//           </Link>
//         )}

//         <div className="hidden md:flex h-8 border-l border-gray-300 mx-1" />

//         <div className="relative flex items-center gap-1">
//           <Link
//             to="/cart"
//             className="hidden md:flex text-text hover:text-hover items-center gap-1"
//           >
//             <FiShoppingCart className="w-5 h-5" />
//             Cart
//           </Link>
//           <span className="hidden md:flex absolute -top-2 -right-2 text-xs bg-hover text-white rounded-full w-5 h-5 items-center justify-center">
//             {cartlength ? cartlength : 0}
//           </span>
//         </div>
//       </div>

//       <button
//         className="md:hidden text-2xl focus:outline-none"
//         onClick={() => setIsOpen(true)}
//       >
//         <FiMenu />
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-2xl gap-6 transition-all">
//           <button
//             className="absolute top-4 items-center text-3xl border border-black rounded-full p-1"
//             onClick={() => setIsOpen(false)}
//           >
//             <FiX />
//           </button>

//           <Link
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-hover font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             to="/product"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-hover font-medium"
//           >
//             Shop
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-hover font-medium"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-hover font-medium"
//           >
//             Contact
//           </Link>
//           <div className="border-t border-gray-200 pt-4 space-y-6">
//             {token ? (
//               <Link
//                 onClick={() => {
//                   Cookies.remove("token1");
//                   clearCart();
//                   setIsOpen(false);
//                 }}
//                 to="/login"
//                 className="hidden md:flex items-center gap-1 text-text hover:text-hover"
//               >
//                 <FiLogOut className="w-5 h-5" />
//                 Logout
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="hidden md:flex items-center gap-1 text-text hover:text-hover"
//               >
//                 <FiLogIn className="w-5 h-5" />
//                 Login
//               </Link>
//             )}
//             <Link
//               to="/search"
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-1 text-black hover:text-hover font-medium"
//             >
//               Search
//             </Link>
//             <Link
//               to="/cart"
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-1 text-black hover:text-hover relative font-medium"
//             >
//               Cart
//               <span className="absolute -top-2 left-12 text-xs bg-hover text-white rounded-full w-5 h-5 flex items-center justify-center">
//                 0
//               </span>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiLogIn,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";
import Cookies from "js-cookie";

const Navbar = ({ cartlength, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const role = Cookies.get("userRole");
    const authToken = Cookies.get("token1");

    setUserRole(role);
    setToken(authToken);

    console.log("Token:", authToken);
    console.log("User Role:", role);
  }, []); // ✅ run once on component mount

  return (
    <nav className="flex items-center justify-between lg:px-10 md:px-4 px-4 md:py-8 py-6 bg-white">
      <div className="flex items-center">
        <div
          className="flex items-center"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <Link to="/">
            <img
              src="/img/logo.png"
              alt="Phlox Furniture"
              className="h-[45px]"
            />
          </Link>
        </div>

        <div className="hidden md:flex h-8 border-l border-gray-300 mx-6" />

        <div
          className="flex gap-8 text-lg"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <Link to="/" className="hidden md:flex text-text hover:text-hover">
            Home
          </Link>
          <Link
            to="/allproduct"
            className="hidden md:flex text-text hover:text-hover"
          >
            Product
          </Link>
          <Link
            to="/about"
            className="hidden md:flex text-text hover:text-hover"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hidden md:flex text-text hover:text-hover"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className="flex items-center text-lg justify-end gap-4"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <Link
          to="/addproduct"
          className="hidden md:flex items-center gap-1 text-text hover:text-hover"
        >
          <FiLogIn className="w-5 h-5" />
          Add Product
        </Link>

        <div className="hidden md:flex h-8 border-l border-gray-300 mx-1" />

        {token ? (
          <Link
            onClick={() => {
              Cookies.remove("token1");
              clearCart();
            }}
            to="/login"
            className="hidden md:flex items-center gap-1 text-text hover:text-hover"
          >
            <FiLogOut className="w-5 h-5" />
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="hidden md:flex items-center gap-1 text-text hover:text-hover"
          >
            <FiLogIn className="w-5 h-5" />
            Login
          </Link>
        )}

        <div className="hidden md:flex h-8 border-l border-gray-300 mx-1" />

        <div className="relative flex items-center gap-1">
          <Link
            to="/cart"
            className="hidden md:flex text-text hover:text-hover items-center gap-1"
          >
            <FiShoppingCart className="w-5 h-5" />
            Cart
          </Link>
          {cartlength > 0 && (
            <span className="hidden md:flex absolute -top-2 -right-2 text-xs bg-hover text-white rounded-full w-5 h-5 items-center justify-center">
              {cartlength}
            </span>
          )}
        </div>
      </div>

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-2xl gap-6 transition-all">
          <button
            className="absolute top-4 items-center text-3xl border border-black rounded-full p-1"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-hover font-medium"
          >
            Home
          </Link>
          <Link
            to="/product"
            onClick={() => setIsOpen(false)}
            className="hover:text-hover font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-hover font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-hover font-medium"
          >
            Contact
          </Link>

          <div className="border-t border-gray-200 flex flex-col items-center text-center pt-4 space-y-6">
            <>
              <Link
                to="/addproduct"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 text-black hover:text-hover font-medium"
              >
                Add Product
              </Link>
            </>

            {token ? (
              <Link
                onClick={() => {
                  Cookies.remove("token1");
                  localStorage.removeItem("role");
                  clearCart();
                  setIsOpen(false);
                }}
                to="/login"
                className="flex items-center gap-1 text-black justify-center hover:text-hover font-medium"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 text-black hover:text-hover font-medium"
              >
                Login
              </Link>
            )}

            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 text-black hover:text-hover relative font-medium"
            >
              Cart
              {cartlength > 0 && (
                <span className="absolute -top-2 left-12 text-xs bg-hover text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartlength}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
