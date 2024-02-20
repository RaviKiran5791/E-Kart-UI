import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

  const navigate = useNavigate();

    const handleLogout = async(event)=>{
        event.preventDefault();

        const URL = "http://localhost:8080/api/v1/logout";
        

        try{
            const response=await axios.post(URL,[],{
                withCredentials:true
            });
            if(response===200){
              console.log(response.data.message);
              
              navigate("/");
            }
        }
        catch(error){
          window.alert(error);
        }

    }
  return {handleLogout};
}

export default LogOut
