import React from "react";
import { Routes,Route } from "react-router";
import App from "../../App";
import navs from "./Navigations";
import { useAuth } from "../Context/AuthProvider";

// const user = {
//   username: "",
//   role: "CUSTOMER",
//   isAuthenticated: false,
// };

// const { role, isAuthenticated } = user;

const AllRoutes = () => {

  const {auth,setAuth } = useAuth();
  const {userName,role, isAuthenticated} = auth;

  const routes = () => {
    return (
      <Route path="/" element={<App userName={userName} isAuthenticated={isAuthenticated} />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    );
  };

  return(
    <Routes>
      {routes()}
    </Routes>
  )
};

export default AllRoutes;
