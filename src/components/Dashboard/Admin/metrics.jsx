import { Stack, Container, Grid } from "@mui/material";
import MetricCard from "./metricCard";

export default function Metrics() {
    return (
        <Container 
          maxWidth="lg" 
          sx={{ 
            mt: 4, 
            mb: 4, 
            // padding: '10px 30px', 
            // alignItems: 'center'
          }} 
          direction='row' 
          spacing={4}
        >
        <Grid container spacing={1}>
            <MetricCard title="Students" name='123'/>
            <MetricCard title="Teachers" name='12'/>
            <MetricCard title="Parents" name='13'/>
            <MetricCard title="Fees Collected" name='$1,234,560'/>
        </Grid>
        </Container>
    );
}