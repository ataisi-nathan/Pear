import { Stack, useMediaQuery } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { year: '2018', studentsEnrolled: 150 },
  { year: '2019', studentsEnrolled: 180 },
  { year: '2020', studentsEnrolled: 200 },
  { year: '2021', studentsEnrolled: 220 },
  { year: '2022', studentsEnrolled: 250 },
];

const barData = [
  { subject: 'Math', score: 80 },
  { subject: 'Science', score: 70 },
  { subject: 'English', score: 85 },
  { subject: 'History', score: 75 },
  { subject: 'Geography', score: 90 },
];

const Chart = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
      <LineChart
        width={isSmallScreen ? 300 : 600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="studentsEnrolled" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      <BarChart
        width={isSmallScreen ? 300 : 600}
        height={300}
        data={barData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>
    </Stack>
  );
};

export default Chart;
