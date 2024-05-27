import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Common/copyright";
import ClassTable from "./classTable";

export default function ClassSchedule() {
  // Dummy Data
  const schedule = [
    { id: 1, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', time: '09:00AM - 09:45AM', date: '25-01-2024', subject: 'Mathematics' },
    { id: 2, name: 'Mary Anne', gender: 'Male', class: '5th Grade', section: 'A', time: '09:45AM - 10:30AM', date: '25-01-2024', subject: 'Mathematics' },
    { id: 3, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', time: '09:00AM - 09:45AM', date: '25-01-2024', subject: 'Mathematics' },
    { id: 4, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', time: '09:00AM - 09:45AM', date: '25-01-2024', subject: 'Mathematics' },
    { id: 5, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', time: '09:00AM - 09:45AM', date: '25-01-2024', subject: 'English Language' },
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <div className="heading-row">
                <Typography variant='h6'>All Students</Typography>
                <div className="filter">
                  <input type="text" name="studentNameSearch" id="studentNameSearch" placeholder="Search Student Name" />
                  <button>Search</button>
                </div>
              </div>
              <ClassTable data={schedule}/>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}