import { Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


function Events () {
    const[events, setEvents] = useState([]);
   
    useEffect(() => {
        fetch("http://localhost:5000/events", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem("token")
              }
        }).then((resp) => {
            return resp.json().then((data) => {
                console.log(data);
                setEvents(data);

            })
        });
    }, [])
   
    return (<div style={{display:"flex", flexWrap: "wrap", justifyContent: "center"}}> 
       
        {events.map((event) => {
            return <Event event={event} />

        })}
    </div>
    )
}

  export  function Event(props){
        const navigate = useNavigate();
        return (
            <Card style={{
            border: "2px solid black",
            margin: 10,
            width: 300,
            minHeight:200
        }}>
            <div
            style={{
                height: "75%"
            }}
            >
            <Typography textAlign={"center"} variant="h5">{props.event.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.event.description}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.event.date}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.event.time}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{props.event.venue}</Typography>
            <Typography textAlign={"center"} variant="subtitle1" type={"link"}>{props.event.link}</Typography>
            </div>
            <div style={{
               margin: 10,
               display: "flex",
               justifyContent: "center"
            }}>
                
                <Button 
                variant="contained"
                onClick={() => {
                   navigate("/event/" + props.event.id);
                }}
                >EDIT</Button>
            </div>
        </Card>

        )
    }

export default Events;