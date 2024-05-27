import { Stack, Typography, Divider, List, ListItem, ListItemText, Collapse } from "@mui/material";
import { Announcement, Book, Class, Dashboard, Event, MenuBook, People, Person, School, TrendingUp } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function SideBar() {
    const [isAuthenticated, setIsAuthenticated] = useState('');
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubMenuOpenOne, setIsSubMenuOpenOne] = useState(false);
    const [isSubMenuOpenTwo, setIsSubMenuOpenTwo] = useState(false);
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
      if (isSubMenuOpenOne == true) {
        setIsSubMenuOpen(false)
        setIsSubMenuOpenTwo(false)
      }
    };
    const toggleSubMenuOne = () => {
      setIsSubMenuOpenOne(!isSubMenuOpenOne);
      if (isSubMenuOpen == true) {
        setIsSubMenuOpen(false)
        setIsSubMenuOpenTwo(false)
      }
    };
    const toggleSubMenuTwo = () => {
      setIsSubMenuOpenTwo(!isSubMenuOpenTwo);
      if (isSubMenuOpen == true || isSubMenuOpenOne == true) {
        setIsSubMenuOpen(false)
        setIsSubMenuOpenOne(false)
      }
    };
    const handleLogout = () => {
      // Clear authentication status from local storage
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
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
            Attendance Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} onClick={toggleSubMenu} to="/attendance"> {/* Add Link component with "to" prop */}
              <Person sx={{marginRight: "25px"}} />    
              <ListItemText primary="Attendance" />
            </ListItem>
            <Divider sx={{my:0}} />
            {/*
            ******************************
            Attendance Button Ends Here
            ******************************
            */}

            
            {/*
            ******************************
            Grades Button Starts Here
            ******************************
            */}
            <ListItem button onClick={toggleSubMenuOne} to="/grades">
              <School sx={{marginRight: "25px"}} />
              <ListItemText primary="Grades & Report" />
            </ListItem>

            <Divider sx={{my:0}} />
            {/*
            ******************************
            Grades Button Ends Here
            ******************************
            */}

            {/*
            ******************************
            Assignment Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/assignment"> {/* Add Link component with "to" prop */}
              <People sx={{marginRight: "25px"}} />
              <ListItemText primary="Assignment" />
            </ListItem>
            {/*
            ******************************
            Assignment Button Ends Here
            ******************************
            */}

            <Divider sx={{my:0}} />
             
            {/*
            ******************************
            Class Schedule Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/class-schedule"> {/* Add Link component with "to" prop */}
              <MenuBook sx={{marginRight: "25px"}} />
              <ListItemText primary="Class Schedule" />
            </ListItem>
            {/*
            ******************************
            Class Schedule Button Ends Here
            ******************************
            */}

            <Divider sx={{my:0}} />

            {/*
            ******************************
            Announcement Button Starts Here
            ******************************
            */}
            <ListItem button component={Link} to="/announcement"> {/* Add Link component with "to" prop */}
              <Class sx={{marginRight: "25px"}} />
              <ListItemText primary="Announcement" />
            </ListItem>
            <Divider sx={{my:0}} />
            {/*
            ******************************
            Announcement Button Ends Here
            ******************************
            */}

            {/* 
            ******************************
            Log Out Button
            ******************************
            */}
            <button className="logout" onClick={handleLogout}>Log Out</button>
            {/* 
            ******************************
            Log Out Button
            ******************************
            */}

          </List>
        </div>
    );
}
