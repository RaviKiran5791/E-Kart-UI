import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter} from "react-router-dom";
import AllRoutes from "./Component/Routes/AllRoutes";
import AuthProvider from "./Component/Context/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes/>}/>
    </BrowserRouter>
  </React.StrictMode>
);

 /**<Route path='/' element={<App/>}>
      <Route path='/login' element={<Login/>}/>
      <Route path='/seller' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      </Route>
      **/