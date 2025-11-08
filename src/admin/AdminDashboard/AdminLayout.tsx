import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { UserApi } from "../../data/Api";
import axios from "axios";
import HomePage from "../../pages/HomePage/HomePage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import AdminSideBar from "./AdminSideBar";
import AdminMenu from "./AdminMenu";

const drawerWidth = 240;

interface Props {
  children: any;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AdminLayout(props: Props) {
  const { window } = props;
  const navigate = useNavigate();
  const [viewUser, setViewUser] = React.useState<any>({});
  const userId = localStorage.getItem("userId");
  const isAdmin: any = localStorage.getItem("isAdmin");
  const roles = localStorage.getItem("roles");
  // React.useEffect(() => {
  //   if (isAdmin == true) {
  //     navigate("/admin-layout");
  //   } else {
  //     navigate("/");
  //   }
  // }, [isAdmin]);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(UserApi + userId);
      console.log(data);
      const sortedData = data;
      // const foundData = data.find((item) => item.artist === artist);
      setViewUser(sortedData);
    };

    fetchPosts();
  }, []);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#ff6900", height: "auto", color: "white" }}>
      <Toolbar />

      <Divider />
      <div>
        <List>
          {/* <AdminSideBar /> */}
          <AdminMenu />
        </List>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {viewUser?.isAdmin === true ? (
        <>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                bgcolor: "white",
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon sx={{ color: "#171744" }} />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ color: "#171744", textDecoration: "none" }}
                >
                  <Link to="/"> Admin Dashboard</Link>
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <Toolbar />
              <Typography paragraph>{props.children}</Typography>
              <Typography paragraph></Typography>
            </Box>
          </Box>
        </>
      ) : viewUser?.roles == "Form-Teacher" ? (
        <>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                bgcolor: "white",
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon sx={{ color: "#171744" }} />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{ color: "#171744", textDecoration: "none" }}
                >
                  <Link to="/"> Admin Dashboard</Link>
                </Typography>
              </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
              aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
                open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
              }}
            >
              <Toolbar />
              <Typography paragraph>{props.children}</Typography>
              <Typography paragraph></Typography>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <HomePage />{" "}
        </>
      )}
    </>
  );
}
