//here we are basically creating a component for nav bar

import { Button, Typography } from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

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

   const [data, setData] = useState({ access_token: '', expiry_date: '' });

   const fetchData = async () => {
     try {
       const response = await fetch('https://technoforum.onrender.com/api/get-token');
       const data = await response.json();
       setData(data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };
 
   useEffect(() => {
     fetchData();
   }, []);
 
   const handleGenerateToken = async () => {
     try {
       const response = await fetch('https://technoforum.onrender.com/api/generate-token', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
       });
       const data = await response.json();
       setData(data);
     } catch (error) {
       console.error('Error generating token:', error);
     }
   };
 
   const isTokenExpired = () => {
     if (!data.expiry_date) return false;
     const expiryDate = new Date(data.expiry_date);
     return expiryDate < new Date();
   };
 
   if(email){
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
        <div style={{display: "flex"}}>
        <div>
            {email}
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
     <h1>Welcome to the ADMIN PANEL</h1>
 
     </div>
     <div>
      <h1>Access Token: {data.access_token}</h1>
      <p className={isTokenExpired() ? 'expired' : ''}>Expiry Date: {data.expiry_date}</p>
      <button onClick={handleGenerateToken}>GENERATE TOKEN</button>
    </div>
     </>
    )
    
   }

   else{
    return <div style={{
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
}

   } 

export default AppbarAdmin;