import { Box, Typography, Grid, Paper } from "@mui/material";

export default function MetricCard({title, name}) {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Paper
        sx={{
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          height: 100,
          bgcolor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='h4' sx={{textAlign: 'center'}}>{name}</Typography>
      </Paper>
    </Grid>
);
}