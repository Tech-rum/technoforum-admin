//here we are basically creating a component for nav bar

import { Button, Typography } from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AdminLogin from "./AdminLogin";

function AppbarAdmin() {
   const navigate = useNavigate();
    const[email, setEmail] = useState(null);


   useEffect(() => {

    function callback2(data) {
       if(data.email){
        setEmail(data.email);
       }
       
        // console.log(data);
    }

    function callback1(res) {
        res.json().then(callback2);
    }

   

     fetch("http://localhost:5000/admin/me", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " +  localStorage.getItem("token")
        }
     }).then(callback1)
   }, [])

   
   if(email){
    return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#00000011"

    }}>
        <div>
        <Typography variant="h5" style={{fontWeight:"600"}}>Technoforum</Typography>
        </div>
        <div style={{display: "flex"}}>
        <div style={{
            padding: 10,
            backgroundColor:"#ffffff"
        }}>
           <strong>Admin-Email: </strong> {email}
        </div>
        <div style={{marginRight: 10}}>
        <Button
         variant="contained" 
         style={{
            marginLeft: 10
        }}
         onClick={() => {
            localStorage.setItem("token", null);
            window.location = "/"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         >Log Out</Button>
        </div>
    </div>
    </div>
     <div
     style={{
         display:"flex",
         justifyContent:"center"
     }}
     >
     <h2>Welcome to the ADMIN PANEL</h2>

 
     </div>
     <AdminLogin></AdminLogin>
     
     </>
    )
    
   }

   else{
    
    return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 10
    }}>
        <div>
        <Typography variant="h6">Technoforum</Typography>
        </div>
        <div>
        <Button
         variant="contained" 
         style={{marginRight: 10}}
         onClick={() => {
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              navigate("/admin")
         }}
         >Sign in</Button>
        </div>
    </div>
    <div>

    </div>
  
    </>)
}

   } 

export default AppbarAdmin;