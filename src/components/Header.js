
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import DescriptionIcon from '@mui/icons-material/Description';
// import InfoIcon from '@mui/icons-material/Info';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import CreateIcon from '@mui/icons-material/Create';
// import { Link } from 'react-router-dom';

// import React from 'react'
// import { makeStyles } from '@material-ui/core'
// import Drawer from '@material-ui/core/Drawer'
// import Typography from '@material-ui/core/Typography'
// import { useHistory, useLocation } from 'react-router-dom'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import { format } from 'date-fns'
// import Avatar from '@material-ui/core/Avatar'

// const drawerWidth = 240

// const useStyles = makeStyles((theme) => {
//   return {
//     page: {
//       background: '#f9f9f9',
//       width: '100%',
//       padding: theme.spacing(3),
//     },
//     root: {
//       display: 'flex',
//     },
//     drawer: {
//       width: drawerWidth,
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     active: {
//       background: '#f4f4f4'
//     },
//     title: {
//       padding: theme.spacing(2),
//     },
//     appBar: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//     date: {
//       flexGrow: 1
//     },
//     toolbar: theme.mixins.toolbar,
//     avatar: {
//       marginLeft: theme.spacing(2)
//     }
//   }
// })

// const AppBarComponent = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const menuItems = [
//     { text: 'Home', icon: <HomeIcon fontSize="small" />, path: '/' },
//     { text: 'Articles', icon: <DescriptionIcon fontSize="small" />, path: '/articles' },
//     { text: 'About', icon: <InfoIcon fontSize="small" />, path: '/about' },
//     { text: 'Contact', icon: <ContactMailIcon fontSize="small" />, path: '/contact' },
//     { text: 'Create Article', icon: <CreateIcon fontSize="small" />, path: '/create-article' },
//   ];

//   const list = () => (
//     <div
//       role="presentation"
//       onClick={toggleDrawer}
//       onKeyDown={toggleDrawer}
//     >
//       <List>
//         {menuItems.map((item) => (
//           <ListItem button key={item.text} component={Link} to={item.path}>
//             <ListItemIcon sx={{ minWidth: 30 }}>
//               {item.icon}
//             </ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </div>
//   );

  // return (
    // <AppBar 
    //     position="fixed" 
    //     className={classes.appBar}
    //     elevation={0}
    //     color="primary"
    //   >
    //     <Toolbar>
    //       <Typography className={classes.date}>
    //         Today is the {format(new Date(), 'do MMMM Y')}
    //       </Typography>
    //       <Typography>Mario</Typography>
    //       <Avatar className={classes.avatar} src="/mario-av.png" />
    //     </Toolbar>
    //   </AppBar>
//     <AppBar position={isMobile ? 'static' : 'sticky'} sx={{ top: 0, zIndex: 1201, transition: '0.3s' }}>
//       <Toolbar sx={{ maxWidth: '95%', margin: '0 auto', justifyContent: 'space-between' }}>
//         {isMobile ? (
//           <>
//             <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{  textAlign: 'center' }}>
//               Real Estate Megazine
//             </Typography>
//           </>
//         ) : (
//           <>
//             <Typography variant="h6" component="div" >
//               Real Estate Megazine
//             </Typography>
//             <List component="nav" sx={{ display: 'flex',flexGrow:1,  gap: '20px' }}>
//               {menuItems.map((item) => (
//                 <ListItem key={item.text} button component={Link} to={item.path}>
//                   <ListItemIcon sx={{ minWidth: 30 }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItem>
//               ))}
//             </List>
//           </>
//         )}
//       </Toolbar>
//       {isMobile && (
//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//           {list()}
//         </Drawer>
//       )}
//     </AppBar>
//   );
// };

// export default AppBarComponent;
