import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
import Chart from "./chart";
import Copyright from '../../Common/copyright';
import Metrics from "./metrics";
import SchoolTable from "./table";
import FeeTable from "./tableFees";

export default function Home() {

  // Dummy Data
  const students = [
    { id: 1, name: 'John Doe', age: 10, class: '5th Grade', grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 11, class: '6th Grade', grade: 'B' },
    { id: 3, name: 'Michael Johnson', age: 12, class: '7th Grade', grade: 'A+' },
    { id: 4, name: 'Emily Brown', age: 10, class: '5th Grade', grade: 'B' },
    { id: 5, name: 'Daniel Lee', age: 11, class: '6th Grade', grade: 'A' },
    { id: 6, name: 'Sophia Garcia', age: 12, class: '7th Grade', grade: 'B+' },
    { id: 7, name: 'Olivia Martinez', age: 11, class: '6th Grade', grade: 'A-' }
  ];
  const feesPayments = [
    { id: 1, studentName: 'John Doe', amountPaid: 500, datePaid: '2024-04-01' },
    { id: 2, studentName: 'Jane Smith', amountPaid: 700, datePaid: '2024-04-02' },
    { id: 3, studentName: 'Michael Johnson', amountPaid: 600, datePaid: '2024-04-03' },
    { id: 4, studentName: 'Emily Brown', amountPaid: 550, datePaid: '2024-04-04' },
    { id: 5, studentName: 'Daniel Lee', amountPaid: 750, datePaid: '2024-04-05' },
    { id: 6, studentName: 'Sophia Garcia', amountPaid: 800, datePaid: '2024-04-06' },
    { id: 7, studentName: 'Olivia Martinez', amountPaid: 700, datePaid: '2024-04-07' }
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
      <Metrics />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={7} lg={8}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 240,
              }}
            >
              <Typography variant='h6'>Chart</Typography>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={5} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 370,
              }}
            >
              <Typography variant='h6'>Deposits</Typography>
              <FeeTable data={feesPayments} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h6'>Students</Typography>
              <SchoolTable data={students}/>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}