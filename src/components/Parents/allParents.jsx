import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Dashboard/Admin/copyright";
import ParentTable from './parentTable';

export default function AllParent() {
  // Dummy Data
  const parents = [
    { id: 1, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 2, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 3, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 4, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 5, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 6, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
    { id: 7, name: 'John Doe', gender: 'Male', class: '5th Grade', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', mobile: "+234 812 3456 789", email: "johndoe@example.com" },
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
                <Typography variant='h6'>All Parents</Typography>
                <div className="filter">
                  <input type="text" name="parentNameSearch" id="parentNameSearch" placeholder="Search Parent Name" />
                  <button>Search</button>
                </div>
              </div>
              <ParentTable data={parents}/>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}