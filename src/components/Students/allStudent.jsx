import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Dashboard/Admin/copyright";
import StudentTable from "./studentTable";

export default function AllStudent() {
  // Dummy Data
  const students = [
    { id: 1, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 2, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 3, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 4, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 5, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 6, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
    { id: 7, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe' },
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
              <StudentTable data={students}/>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}