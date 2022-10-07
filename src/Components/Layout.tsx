import React, { useState } from "react";

import { List, ListItem, ListItemIcon, ListItemText, Divider, Badge, ListItemAvatar } from "@mui/material"
import { AlignHorizontalCenter, Inbox } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar, Toolbar, IconButton, Stack, Button, Typography,
  Box, ListItemButton, Menu, MenuItem, Fade
} from "@mui/material"
import { Drawer } from "@mui/material";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AssignmentIcon from "@mui/icons-material/Assignment"
import { makeStyles, Theme, createStyles } from "@mui/material";
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import ProfileImg from "../assets/profile.jpg"
import { borderRadius } from "@mui/system";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const Layout = ({isDrawerOpen,setIsDrawerOpen}:{isDrawerOpen:boolean,setIsDrawerOpen:any}) => {

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  

  const drawer = (
    <div>
      
      <List>
         <Typography variant="subtitle1">Dashboards</Typography>
        {['Modern', 'Analytical', 'eCommerce'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Stack direction="row" alignItems="center">
                
              <ListItemText primary={text} />
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      <Typography variant="subtitle1">APPS</Typography>
        {['Chat', 'Notes', 'Mail','Calender','Customers'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      <Typography variant="subtitle1">PAGES</Typography>
        {['Shop', 'Alert', 'UserProfile','QuillEditor','TreeView','Pricing','Typography','featherIcons','Timeline'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      <Typography variant="subtitle1">FORMS</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      <Typography variant="subtitle1">CHARTS</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
      <Typography variant="subtitle1">AUTHENTICATION</Typography>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
  
    <>
    
      <AppBar position="sticky" style={{ background: '#fff' }}>
        <Toolbar>
          <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, flexDirection: 'row', alignItems: 'center', mr: 6 }} >
           
          </Box>
          <Box flexGrow={2} ml={{ xs: 0, sm: 0, md: 0, lg: "4rem" }}>
            <IconButton>
              <MenuIcon onClick={(): void => setIsDrawerOpen(!isDrawerOpen)} />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton>
          <Badge  color="primary" variant="dot">
              <ChatBubbleOutlineOutlinedIcon />

            </Badge>
           
          </IconButton>
          <IconButton>
          <Badge  color="primary" variant="dot">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem sx={{ my: 2, mr: 1 }} />

          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
              borderRadius: "50%"

            }}
            alt="Image"
            src="https://th.bing.com/th/id/OIP.sioGlpaxsMYc95aKf3gUfQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          />

          <Typography  sx={{ color: "black", display: { xs: 'none', md: 'block' } }}>Hi, Julia</Typography>
          <IconButton><KeyboardArrowDownIcon /></IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
       variant="persistent"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          
          '& .MuiDrawer-paper': {
            top:"15%",
            left:"2%",
            width:240,
            boxSizing: 'border-box',
             borderRadius:4,
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
            padding:2
          },
        }}
      >
        {drawer}

      </Drawer>
      
    </>
  )
}

export default Layout