import React from 'react'
import Box from '@mui/material/Box';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import "./Sidebar.css"
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import { Grid, IconButton } from '@mui/material';
import { Link } from "react-router-dom"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
const drawerWidth = 240;
export default function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Impala Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List style={{ marginTop: "130px" }}>
                    <List
      sx={{ width: "100%",color:"black", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
<Divider/>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         <Link to="/impalaadmin/customer">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItemButton>
          </Link>
        </List>
        <Divider/>
        <List component="div" disablePadding>
         <Link to="">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </Link>
        </List>
        <Divider/>
        <List component="div" disablePadding>
          <Link to ="">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          </Link>
          <Divider/>
        </List>
      </Collapse>
    </List>
    <Link to='/impalaadmin/product'>
    <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
        </ListItemIcon>
        
        <ListItemText primary="Product" />
        
      </ListItemButton>
      </Link> 
                        <Divider />
                        <Link to="/impalaadmin/order">               
    <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
        </ListItemIcon>
        
        <ListItemText primary="Order" />
      </ListItemButton>
      
      </Link>
                        <Divider />
                        <Link to="/impalaadmin/earning">                      
    <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
        </ListItemIcon>
       
        <ListItemText primary="Earning" />
      </ListItemButton>
      
      </Link>
                       
                        <Divider/>
                        <Link to="/impalaadmin/setting">              
    <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
        </ListItemIcon>
       
        <ListItemText primary="Setting" />

      </ListItemButton>
      </Link>


                    </List>

                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />

            </Box>
        </Box>
    )
}
