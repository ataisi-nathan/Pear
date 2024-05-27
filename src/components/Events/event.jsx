import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Common/copyright";
import EventTable from "./eventTable";
import CreateEvent from "./createEvent";

export default function Events() {

  // Dummy Data
  const eventData = [
    { id: 201, title: "Children's Day Celebration", date: '17th May, 2024', message: "This is just a dummy text so just ignore whatever I put this besides this is just a demo and I don't know why I can't use lorem ispum"},
    { id: 202, title: "Public Holiday", date: '14th May, 2024', message: "This is just a dummy text so just ignore whatever I put this besides this is just a demo and I don't know why I can't use lorem ispum"},
    { id: 203, title: "Adjustment in closing date", date: '07th April, 2024', message: "This is just a dummy text so just ignore whatever I put this besides this is just a demo and I don't know why I can't use lorem ispum"},
    { id: 204, title: "Resumption Date", date: '17th March, 2024', message: "This is just a dummy text so just ignore whatever I put this besides this is just a demo and I don't know why I can't use lorem ispum"},
  ];

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <div className="subject row">
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={4}>
              <CreateEvent />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div className="heading-row">
                  <Typography variant='h6'>Notice Board</Typography>
                  <div className="filter">
                    <input type="text" name="subjectNameSearch" id="subjectNameSearch" placeholder="Search Subject Name" />
                    <button>Search</button>
                  </div>
                </div>
                <EventTable data={eventData}/>
              </Paper>
            </Grid>  
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </div>
    </Box>
  );
}