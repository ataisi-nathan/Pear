import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Common/copyright";

export default function AddClass() {

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
            <form action="#">
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div className="heading-row">
                  <Typography variant='h6'>Add Student Form</Typography>
                  <div className="filter">
                    {/* To be added later */}
                  </div>
                </div>
                <div className="form">
                  <label htmlFor="firstName">
                    <p>First Name</p>
                    <input type="text" name="first-name" id="firstName" />
                  </label>
                  <label htmlFor="lastName">
                    <p>Last Name</p>
                    <input type="text" name="last-name" id="lastName" />
                  </label>
                  <label htmlFor="class">
                    <p>Class</p>
                    <select name="class" id="class">
                      <option value="1st Grade">1st Grade</option>
                      <option value="2nd Grade">2nd Grade</option>
                      <option value="3rd Grade">3rd Grade</option>
                      <option value="4th Grade">4th Grade</option>
                      <option value="5th Grade">5th Grade</option>
                      <option value="6th Grade">6th Grade</option>
                      <option value="7th Grade">7th Grade</option>
                      <option value="8th Grade">8th Grade</option>
                      <option value="9th Grade">9th Grade</option>
                    </select>
                  </label>
                  <label htmlFor="section">
                    <p>Section</p>
                    <select name="section" id="section">
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </label>
                  <label htmlFor="gender">
                    <p>Gender</p>
                    <select name="gender" id="gender">
                      <option value="Male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </label>
                  <label htmlFor="dob">
                    <p>Date of Birth</p>
                    <input type="date" name="dob" id="dob" />
                  </label>
                  <label htmlFor="email">
                    <p>Email</p>
                    <input type="email" name="email" id="email" />
                  </label>
                  <label htmlFor="religion">
                    <p>Religion</p>
                    <input type="text" name="religion" id="religion" />
                  </label>
                  <input className="top-30" type="file" name="file" id="file" />
                </div>
                <div className="btn top-30">
                  <button type="reset">Reset</button>
                  <button>Create</button>
                </div>
              </Paper>
            </form>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}