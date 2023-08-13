import { Grid, Typography } from "@mui/material";

function Front() {
    return(<div >
        <Grid container style={{
            padding: "5vw"
        }}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{
                    marginTop: 100
                }}>
                <Typography variant="h2">Technoforum Admin</Typography>
                <br /><br />
                <Typography variant="h4">Let's Learn, Imagine and Build</Typography>
                </div>
             
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <img src={"/technoIsland.png"} width={"100%"} />
            </Grid>
        </Grid>
    </div>)
}

export default Front;