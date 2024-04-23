import { Stack, Typography, Divider, List, ListItem, ListItemText, Collapse } from "@mui/material";
import { Announcement, Book, Class, Dashboard, Event, MenuBook, People, Person, School, TrendingUp } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function SideBar() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubMenuOpenOne, setIsSubMenuOpenOne] = useState(false);
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };
    const toggleSubMenuOne = () => {
      setIsSubMenuOpenOne(!isSubMenuOpenOne);
    };

    return (
        <div 
          onMouseLeave={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        onMouseEnter={toggleDrawer}
        >
            
          <List >
            {/* Dashboard Button */}
            <ListItem button component={Link} to="/dashboard">
              <Dashboard sx={{marginRight: "25px"}} />
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider sx={{my:0}} />

            {/* Student Toggle Button */}
            <ListItem button component={Link} onClick={toggleSubMenu}> {/* Add Link component with "to" prop */}
              <Person sx={{marginRight: "25px"}} />    
              <ListItemText primary="Students" />
            </ListItem>
            {/* Student sub-menu Links */}
            <Divider sx={{my:0}} />
            <Collapse in={isSubMenuOpen}>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/students">
                  <ListItemText primary="All Students" />
                </ListItem>
                <ListItem button component={Link} to="/students/detail">
                  <ListItemText primary="Student Detail" />
                </ListItem>
                <ListItem button component={Link} to="/students/admit"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Student Admit" />
                </ListItem>
                <ListItem button component={Link} to="/students/promotion"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Student Promotion" />
                </ListItem>
              </List>
            </Collapse>

            {/* Teacher Button */}
            <ListItem button onClick={toggleSubMenuOne}>
              <School sx={{marginRight: "25px"}} />
              <ListItemText primary="Teachers" />
            </ListItem>
            <Divider sx={{my:0}} />
            <Collapse in={isSubMenuOpenOne}>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/teacher"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="All Teachers" />
                </ListItem>
                <ListItem button component={Link} to="/teacher-details"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Teacher Details" />
                </ListItem>
                <ListItem button component={Link} to="/teacher/product3"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Add Teacher" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button component={Link} to="/parents"> {/* Add Link component with "to" prop */}
              <People sx={{marginRight: "25px"}} />
              <ListItemText primary="Parents" />
            </ListItem>
            <Divider sx={{my:0}} />
            <ListItem button component={Link} to="/subjects"> {/* Add Link component with "to" prop */}
              <MenuBook sx={{marginRight: "25px"}} />
              <ListItemText primary="Subjects" />
            </ListItem>
            <Divider sx={{my:0}} />
            <ListItem button component={Link} to="/classes"> {/* Add Link component with "to" prop */}
              <Class sx={{marginRight: "25px"}} />
              <ListItemText primary="Classes" />
            </ListItem>
            <Divider sx={{my:0}} />
            <ListItem button component={Link} to="/events"> {/* Add Link component with "to" prop */}
              <Event sx={{marginRight: "25px"}} />
              <ListItemText primary="Events" />
            </ListItem>
            <Divider sx={{my:0}} />
            <ListItem button component={Link} to="/results"> {/* Add Link component with "to" prop */}
              <TrendingUp sx={{marginRight: "25px"}} />
              <ListItemText primary="Results" />
            </ListItem>
            <Divider sx={{my:0}} />
            <ListItem button component={Link} to="/announcement"> {/* Add Link component with "to" prop */}
              <Announcement sx={{marginRight: "25px"}} />
              <ListItemText primary="Announcement" />
            </ListItem>
            <Divider sx={{my:0}} />
          </List>
        </div>
    );
}
