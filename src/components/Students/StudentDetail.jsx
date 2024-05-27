import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Common/copyright";

export default function StudentDetail() {
  const students = { id: 1, name: 'John Doe', gender: 'Male', class: '5', section: 'A', address: 'No 123 Cresent Rd', dateOfBirth: '25-01-2008', parentName: 'Michael Doe', religion: "Islam", email: "johndoe@email.coz", admitDate: "05/04/2023", phoneNo: "+234 81 2340 7816" }
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
                <Typography variant='h5'>{students.name} Detail</Typography>
              </div>
              <div className="layout">
                <div className="image"></div>
                <div className="detail">
                  <h2>About Me</h2>
                  <span>
                    <p>Name:</p>
                    <p>{students.name}</p>
                  </span>
                  <span>
                    <p>Gender:</p>
                    <p>{students.gender}</p>
                  </span>
                  <span>
                    <p>Father Name:</p>
                    <p>{students.parentName}</p>
                  </span>
                  <span>
                    <p>Date of Birth:</p>
                    <p>{students.dateOfBirth}</p>
                  </span>
                  <span>
                    <p>Religion:</p>
                    <p>{students.religion}</p>
                  </span>
                  <span>
                    <p>Email:</p>
                    <p>{students.email}</p>
                  </span>
                  <span>
                    <p>Admission Date:</p>
                    <p>{students.admitDate}</p>
                  </span>
                  <span>
                    <p>Class:</p>
                    <p>{students.class}</p>
                  </span>
                  <span>
                    <p>Section:</p>
                    <p>{students.section}</p>
                  </span>
                  <span>
                    <p>Address:</p>
                    <p>{students.address}</p>
                  </span>
                  <span>
                    <p>Student ID:</p>
                    <p>{students.id}</p>
                  </span>
                  <span>
                    <p>Phone:</p>
                    <p>{students.phoneNo}</p>
                  </span>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}