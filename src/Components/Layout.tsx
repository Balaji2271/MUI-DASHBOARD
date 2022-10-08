import { Divider, Badge} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {AppBar, Toolbar, IconButton, Typography, Box} from "@mui/material"
import { Drawer } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { List , ListItem, ListItemIcon, ListItemText } from "@mui/material"
import {useNavigate} from "react-router-dom"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import './layout.css'
import Transaction from './Transaction'
import  RenderChart from './ChartComponent'
import  Performance  from './Performance'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CallSplitOutlinedIcon from '@mui/icons-material/CallSplitOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';


const Layout = ({isDrawerOpen,setIsDrawerOpen}:{isDrawerOpen:boolean,setIsDrawerOpen:any}) => {

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate()

  const Menuitems =[
    {
    id:1,
    title:'Modern',
    path:'/modern',
    icon:<ClearAllOutlinedIcon/>  
    },
    {
        id:2,
        title:'Analytical',
        path:'/analytics',
        icon:<PieChartOutlinedIcon/>  
        },
    
        {
            id:3,
            title:'eCommerce',
            path:'/ecommerce',
            icon:<ShoppingBagOutlinedIcon/>  
            },

]

const Menuitems1 =[
  {
  id:1,
  title:'Chat',
  path:'/chat',
  icon:<ChatBubbleOutlineOutlinedIcon/>  
  },
  {
      id:2,
      title:'Notes',
      path:'/notes',
      icon:<NoteAltOutlinedIcon/>  
      },
  
      {
          id:3,
          title:'Mail',
          path:'/mail',
          icon:<InboxOutlinedIcon/>  
          },
          {
            id:4,
            title:'Calendar',
            path:'/calendar',
            icon:<CalendarTodayOutlinedIcon/>  
            },

]
const Menuitems2 =[
  {
  id:1,
  title:'Alert',
  path:'/alert',
  icon:<ErrorOutlineOutlinedIcon/>  
  },
  {
      id:2,
      title:'User Profile',
      path:'/user',
      icon:<PermIdentityOutlinedIcon/>  
      },
  
      {
          id:3,
          title:'Treeview',
          path:'/tree',
          icon:<AccountTreeOutlinedIcon/>  
          },

          {
            id:4,
            title:'Pricing',
            path:'/pricing',
            icon:<AttachMoneyOutlinedIcon/>  
            },
            {
              id:5,
              title:'Typography',
              path:'/typography',
              icon:<CallSplitOutlinedIcon/>  
              }, {
                id:6,
                title:'Feathericon',
                path:'/feathericon',
                icon:<EnergySavingsLeafOutlinedIcon/>  
                },
                {
                  id:7,
                  title:'Timeline',
                  path:'/timeline',
                  icon:<AccessTimeOutlinedIcon/>  
                  },

]
const Menuitems3 =[
  {
  id:1,
  title:'Form Layout',
  path:'/formlayout',
  icon:<InsertDriveFileOutlinedIcon/>  
  },
  {
      id:2,
      title:'Form Custom',
      path:'/formcustom',
      icon:<DifferenceOutlinedIcon/>  
      },
  
      {
          id:3,
          title:'Form Wizard',
          path:'/formwizard',
          icon:<FolderCopyOutlinedIcon/>  
          },

]
const Menuitems4 =[
  {
  id:1,
  title:'Widget Feed',
  path:'/widgetfeed',
  icon:<DashboardCustomizeOutlinedIcon/>  
  },
  {
      id:2,
      title:'Widget App',
      path:'/widgetapp',
      icon:<DashboardOutlinedIcon/>  
      }

]
const Menuitems5 =[
  {
  id:1,
  title:'Line Chart',
  path:'/linechart',
  icon:<ShowChartOutlinedIcon/>  
  },
  {
      id:2,
      title:'Gredient Chart',
      path:'/gredientchart',
      icon:<SignalCellularAltOutlinedIcon/>  
      },
  
      {
          id:3,
          title:'Area Chart',
          path:'/areachart',
          icon:<EqualizerOutlinedIcon/>  
          },

          {
            id:4,
            title:'Column Chart',
            path:'/columnchart',
            icon:<DonutLargeOutlinedIcon/>  
            },

]
const Menuitems6 =[
  {
  id:1,
  title:'Login',
  path:'/login',
  icon:<LoginOutlinedIcon/>  
  },
  {
      id:2,
      title:'Register',
      path:'/register',
      icon:<PersonAddAltOutlinedIcon/>  
      },
  
      {
          id:3,
          title:'Reset Password',
          path:'/resetpassword',
          icon:<RestartAltOutlinedIcon/>  
          },

          {
            id:4,
            title:'Error',
            path:'/error',
            icon:<ReportProblemOutlinedIcon/>  
            },
]

  const drawer = (
    <div>  
      <List>
         <Typography variant="button">DASHBOARD</Typography>
         <p></p>
        {Menuitems.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">APP</Typography>
         <p></p>
        {Menuitems1.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">PAGES</Typography>
         <p></p>
        {Menuitems2.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">FORMS</Typography>
         <p></p>
        {Menuitems3.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">WIDGET</Typography>
         <p></p>
        {Menuitems4.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">CHARTS</Typography>
         <p></p>
        {Menuitems5.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
         <Typography variant="button">AUTHENTICATION</Typography>
         <p></p>
        {Menuitems6.map((item) => (
          <ListItem
          button
          key={item.id} 
          onClick={() => navigate(item.path)} 
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      </div>
  )

  return (  
    <>
      <AppBar position="fixed" style={{ background: '#fff' }}>
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
        className="scrollbar"
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{  
          '& .MuiDrawer-paper': 
          {
            top:"15%",
            left:"2%",
            height:"79%",
            width:240,
            boxSizing: 'border-box',
            borderRadius: '16px',
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgb(90 114 123 / 11%) 0px 7px 30px 0px",
            padding:2
            
          },
        }}
      >
       {drawer}
      </Drawer> 
      <div className="override">
    <Box sx={{...(isDrawerOpen ? {
        ml:35,
        top:"30%"
      }: {ml:2})}}>
        <Transaction />
       <RenderChart />
      <Box sx={{mr:2}}>
       <Performance/>
       </Box>
       </Box>
       </div>
    </>
  )
}

export default Layout