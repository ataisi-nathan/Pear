import  * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Routes, Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { KeyboardArrowDown, Mail, Apps } from '@mui/icons-material';
import { Stack, Avatar, Menu, MenuItem, Button, CssBaseline, Typography, Divider, Box } from '@mui/material';
import { useState } from 'react';
import SideBar from './Sidebar';
import Home from './home';
import AllStudent from '../../Students/allStudent';
import StudentDetail from '../../Students/StudentDetail';
import AdmitForm from '../../Students/admitForm';
import AllTeacher from '../../Teachers/allTeachers';
import AllParent from '../../Parents/allParents';
import TeacherDetail from '../../Teachers/teacherDetail';
import Subjects from '../../Courses/courses';
import AddTeacher from '../../Teachers/addTeacher';
import AddClass from '../../Classes/addClass';
import ClassSchedule from '../../Classes/classSchedule';
import Events from '../../Events/event';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminDashboard({ handleLogout }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar className='blue-background' position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Stack direction='row' spacing={1}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
            </IconButton>
                <Stack direction='row' spacing={1}>
                    {/* Temporary Avatar for Demo */}
                    <Button 
                      color='inherit'
                      id='account-button' 
                      endIcon={<KeyboardArrowDown />}
                    >
                      <Avatar sx={{ bgcolor: 'grey'}} ></Avatar>
                      Eric H
                    </Button>
                    {/* Main Avatar Code */}
                    {/* <Avatar src={} alt='Profile Picture' /> */}
                </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar className='blue-background'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
              <Typography variant='h6' component='h1'>StudentIQ</Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" className='blue-background full-height'>
            <SideBar />
          </List>
        </Drawer>

        {/* This is the code for the main body of the dashboard */}
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/students" element={<AllStudent />} />
          <Route path="/students/detail" element={<StudentDetail />} />
          <Route path="/students/admit" element={<AdmitForm />} />
          <Route path="/students/detail" element={<StudentDetail />} />
          <Route path="/teachers" element={<AllTeacher />} />
          <Route path="/teachers/detail" element={<TeacherDetail />} />
          <Route path="/teachers/add-teacher" element={<AddTeacher />} />
          <Route path="/parents" element={<AllParent />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/classes" element={<ClassSchedule />} />
          <Route path="/classes/add-class" element={<AddClass />} />
          <Route path="/events" element={<Events />} />
          <Route path="/classes/add-class" element={<AddClass />} />
          {/* </Route> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}