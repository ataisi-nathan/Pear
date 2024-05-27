import { Box, Toolbar, Container, Grid, Paper, Typography } from "@mui/material";
// import Copyright from "../Dashboard/Admin/copyright";

export default function CreateEvent() {
  return (
    <form action="#">
      <Paper sx={{ p:2, display: 'flex', flexDirection: 'column' }}>
        {/* Header to be added later */}
        
        <div className="heading-row">
        <Typography variant='h6'>Create an Event</Typography>
        <div className="filter">
          {/* To be added later */}
        </div>
        </div>

        {/* Header to be added later */}

        <div className="form column">
          <label htmlFor="eventTitle">
            <p>Title</p>
            <input type="text" name="eventTitle" id="eventTitle" />
          </label>
          <label htmlFor="category">
            <p>Subject Category</p>
            <select name="category" id="category">
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="general">General</option>
              <option value="theory">Theory</option>
            </select>
          </label>
          <label htmlFor="class">
            <p>Subject Class</p>
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
          <button className="primary">Create</button>
        </div>

      </Paper>
    </form>
  );
}