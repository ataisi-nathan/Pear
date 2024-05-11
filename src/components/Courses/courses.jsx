import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Copyright from "../Dashboard/Admin/copyright";
import SubjectTable from "./coursesTable";
import SubjectForm from "./createCourse";

export default function Subjects() {

  // Dummy Data
  const subjects = [
    { id: 2101, name: 'Mathematics', category: 'General', class: '5th Grade'},
    { id: 2102, name: 'English Language', category: 'General', class: '5th Grade', },
    { id: 2103, name: 'Chemistry', category: 'Science', class: '5th Grade'},
    { id: 2104, name: 'Computer Sc', category: 'Practical', class: '5th Grade'},
    { id: 2105, name: 'Food & Nutrition', category: 'Practical', class: '5th Grade'},
    { id: 2106, name: 'Economics', category: 'Theory', class: '5th Grade'},
    { id: 2107, name: 'Technical Drawing', category: 'Practical', class: '5th Grade'},
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
              <SubjectForm />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <div className="heading-row">
                  <Typography variant='h6'>All Subjects</Typography>
                  <div className="filter">
                    <input type="text" name="subjectNameSearch" id="subjectNameSearch" placeholder="Search Subject Name" />
                    <button>Search</button>
                  </div>
                </div>
                <SubjectTable data={subjects}/>
              </Paper>
            </Grid>  
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </div>
    </Box>
  );
}