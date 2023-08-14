import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
function Event() {
    const {eventId} = useParams();
    const[event, setEvent] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/event/'+eventId  , {
            method: "GET",
            headers:  {
                "Authorization": "Bearer " +  localStorage.getItem("token")
              }

        }).then((resp) => {return resp.json().then((data) => {
             setEvent(data);
            console.log(data);
        })})
    }, [])

    if(!event){
      return <Loading />
    }
    
    return <div>
       <Grid container>
        <Grid item sm={12} md={6} lg={6}>
        <UpdateCard event={event} setEvent={setEvent} />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
                <EventCard event={event} />
            </Grid>
       </Grid>
                
         
           
       
    </div>
}


function UpdateCard({event, setEvent}) {
    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [date, setDate] = useState(event.date);
    const [time, setTime] = useState(event.time);
    const [venue, setVenue] = useState(event.venue);
    const [link, setLink] = useState(event.link);

    return <div style={{display: "flex", justifyContent: "center"}}>

       
    <Card varint={"outlined"} style={{maxWidth: 600, marginTop: 50}}>
        <div style={{padding: 20}}>
            <Typography style={{marginBottom: 10}}>Update event details</Typography>
            <TextField
                value={title}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                fullWidth={true}
                label="Title"
                variant="outlined"
            />

            <TextField
                value={description}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label="Description"
                variant="outlined"
            />

<TextField
                value={date}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setDate(e.target.value)
                }}
                fullWidth={true}
                label="Date"
                variant="outlined"
            />

            <TextField
                value={time}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setTime(e.target.value)
                }}
                fullWidth={true}
                label="Time"
                variant="outlined"
            />

<TextField
                value={venue}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setVenue(e.target.value)
                }}
                fullWidth={true}
                label="Venue"
                variant="outlined"
            />
<TextField
                value={link}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setLink(e.target.value)
                }}
                fullWidth={true}
                label="Link"
                variant="outlined"
            />

            <Button
                variant="contained"
                // onClick={async () => {
                //     axios.put(`http://localhost:5000/admin/courses/` + course._id, {
                //         title: title,
                //         description: description,
                //         imageLink: image,
                //         published: true,
                //         price
                //     }, {
                //         headers: {
                //             "Content-type": "application/json",
                //             "Authorization": "Bearer " + localStorage.getItem("token")
                //         }
                //     });
                //     let updatedCourse = {
                //         _id: course._id,
                //         title: title,
                //         description: description,
                //         imageLink: image,
                //         price
                //     };
                //     setCourse(updatedCourse);
                // }}
            > Update course</Button>
        </div>
    </Card>
</div>
}


function EventCard(props) {
    const event = props.event;
    return <div style={{display: "flex",  marginTop: 50, justifyContent: "center", width: "100%"}}>
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
            <Typography textAlign={"center"} variant="h5">{event.title}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{event.description}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{event.date}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{event.time}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">{event.venue}</Typography>
            <Typography textAlign={"center"} variant="subtitle1" type={"link"}>{event.link}</Typography>
            </div>
            <div style={{
               margin: 10,
               display: "flex",
               justifyContent: "center"
            }}>
        </div>
    </Card>
    </div>
}



export default Event;