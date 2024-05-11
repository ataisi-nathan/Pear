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
      if (isSubMenuOpenOne == true) {
        setIsSubMenuOpenOne(false)
      }
    };
    const toggleSubMenuOne = () => {
      setIsSubMenuOpenOne(!isSubMenuOpenOne);
      if (isSubMenuOpen == true) {
        setIsSubMenuOpen(false)
      }
    };

    return (
        <div 
          onMouseLeave={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        onMouseEnter={toggleDrawer}
        className="blue-background"
        >
            
          <List >
            {/* Dashboard Button */}
            <ListItem button component={Link} to="/dashboard">
              <Dashboard sx={{marginRight: "25px"}} />
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider sx={{my:0}} />

            {/*
            ******************************
            Students Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} onClick={toggleSubMenu}> {/* Add Link component with "to" prop */}
              <Person sx={{marginRight: "25px"}} />    
              <ListItemText primary="Students" />
            </ListItem>
            {/* Student sub-menu Links */}
            <Divider sx={{my:0}} />
            <Collapse in={isSubMenuOpen}>
              <List className="sub-menu" component="div" >
                <ListItem button component={Link} to="/students">
                  <ListItemText primary="All Students" />
                </ListItem>
                
                <Divider sx={{my:0}} />
                
                <ListItem button component={Link} to="/students/detail">
                  <ListItemText primary="Student Detail" />
                </ListItem>
                
                <Divider sx={{my:0}} />
                
                <ListItem button component={Link} to="/students/admit"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Student Admit" />
                </ListItem>
                
                <Divider sx={{my:0}} />
                
              </List>
            </Collapse>
            {/*
            ******************************
            Students Button Ends Here
            ******************************
            */}

            
            {/*
            ******************************
            Teacher Button Starts Here
            ******************************
            */}
            <ListItem button onClick={toggleSubMenuOne}>
              <School sx={{marginRight: "25px"}} />
              <ListItemText primary="Teachers" />
            </ListItem>

            <Divider sx={{my:0}} />

            {/* Teachers Sub-menu Toggle Button */}
            <Collapse in={isSubMenuOpenOne}>
              <List className="sub-menu" component="div" disablePadding>
                <ListItem button component={Link} to="/teachers"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="All Teachers" />
                </ListItem>

                <Divider sx={{my:0}} />
                
                <ListItem button component={Link} to="/teachers/detail"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Teacher Details" />
                </ListItem>
                
                <Divider sx={{my:0}} />
                
                <ListItem button component={Link} to="/add-teacher"> {/* Add Link component with "to" prop */}
                  <ListItemText primary="Add Teacher" />
                </ListItem>
                <Divider sx={{my:0}} />
              </List>
            </Collapse>
            {/*
            ******************************
            Teacher Button Ends Here
            ******************************
            */}


            {/*
            ******************************
            Parents Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/parents"> {/* Add Link component with "to" prop */}
              <People sx={{marginRight: "25px"}} />
              <ListItemText primary="Parents" />
            </ListItem>
            {/*
            ******************************
            Parents Button Ends Here
            ******************************
            */}

            <Divider sx={{my:0}} />
             
            {/*
            ******************************
            Subject Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/subjects"> {/* Add Link component with "to" prop */}
              <MenuBook sx={{marginRight: "25px"}} />
              <ListItemText primary="Subjects" />
            </ListItem>
            {/*
            ******************************
            Subject Button Ends Here
            ******************************
            */}

            <Divider sx={{my:0}} />

            {/*
            ******************************
            Classes Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/classes"> {/* Add Link component with "to" prop */}
              <Class sx={{marginRight: "25px"}} />
              <ListItemText primary="Classes" />
            </ListItem>
            {/*
            ******************************
            Classes Button Ends Here
            ******************************
            */}

            <Divider sx={{my:0}} />

            {/*
            ******************************
            Events Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/events"> {/* Add Link component with "to" prop */}
              <Event sx={{marginRight: "25px"}} />
              <ListItemText primary="Events" />
            </ListItem>
            {/*
            ******************************
            Events Button Ends Here
            ******************************
            */}
            
            <Divider sx={{my:0}} />

            {/*
            ******************************
            Results Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/results"> {/* Add Link component with "to" prop */}
              <TrendingUp sx={{marginRight: "25px"}} />
              <ListItemText primary="Results" />
            </ListItem>
            {/*
            ******************************
            Results Button Ends Here
            ******************************
            */}
            
            <Divider sx={{my:0}} />

            {/*
            ******************************
            Announcement Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/announcement"> {/* Add Link component with "to" prop */}
              <Announcement sx={{marginRight: "25px"}} />
              <ListItemText primary="Announcement" />
            </ListItem>
            {/*
            ******************************
            Announcement Button Starts Here
            ******************************
            */}
            <Divider sx={{my:0}} />
          </List>
        </div>
    );
}
