import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../Private/Common/LogOut";


const Header = ({userName,isAuthenticated}) => {

  const {handleLogout}=LogOut();
  

  return (
    <header className="bg-yellow-500 p-4">
      <nav className="flex justify-between items-center px-10">
        <Link>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png" alt="logo" className="h-10"/>
        </Link>

        {/*SEARCH BAR */}
        <div>
          <input
            type="text"
            placeholder="search for products, categories, and more.."
            className="p-2 rounded-full w-96"
          />
        </div>

        {/* Link Block */}
        <div className="flex items-center space-x-4 text-white flex gap-4">
          {/* Login */}
          {isAuthenticated ? <Link to={"/"} className="p-2">{userName}</Link>:<Link to={"/login"} className="p-2">Login</Link>}

          {/* Cart */}
          <Link to={"/cart"} className="">Cart</Link>

           {/* Become a seller */}
           <Link to={"/seller"} className="">Become a seller</Link>

           {/* Logout */}
           {isAuthenticated ? <Link to={"/logout"} className="p-2" onClick={handleLogout}>Logout</Link>:<Link to={"/"} className="p-2"></Link>}

        </div>
      </nav>
    </header>
  );
};

export default Header;
