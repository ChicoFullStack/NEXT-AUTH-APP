"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Collapse } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import logo from "../assets/logo.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import RecommendIcon from "@mui/icons-material/Recommend";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import HelpIcon from "@mui/icons-material/Help";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const drawerWidth = 170;

function Layout(props) {
  const { data: session } = useSession();

  const { window } = props;
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  console.log("Pathname ", pathname);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const drawer = (
    <div>
      <Toolbar className="flex items-center justify-center">
        <div>
          <Image src={logo} height={100} width={100} alt="Logo" />
        </div>
      </Toolbar>
      {/* <Divider /> */}
      <List>
        {[
          "Dashboard",
          "Processo",
          "Cadastros",
          "Indicadores",
          "Messages",
          "Settings",
          "Projeto",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            className={
              pathname.startsWith("/" + text.toLowerCase())
                ? "text-sky-600 bg-slate-100"
                : "text-slate-700"
            }
            onClick={() => {
              router.push("/" + text.toLowerCase());
            }}
          >
            <ListItemButton>
              <ListItemIcon
                className={
                  pathname.startsWith("/" + text.toLowerCase())
                    ? "text-sky-600 bg-slate-100"
                    : "text-slate-700"
                }
              >
                {index === 0 && <SpaceDashboardIcon />}
                {index === 1 && <AccountTreeIcon />}
                {index === 2 && <PeopleAltIcon />}
                {index === 3 && <QueryStatsIcon />}
                {index === 4 && <MailIcon />}
                {index === 5 && <SettingsIcon />}
                {index === 6 && <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem
          disablePadding
          onClick={handleCollapse}
          className={
            pathname.startsWith("/sobre")
              ? "text-sky-600 bg-slate-100"
              : "text-slate-700"
          }
        >
          <ListItemButton>
            <ListItemIcon
              className={
                pathname.startsWith("/sobre")
                  ? "text-sky-600 bg-slate-100"
                  : "text-slate-700"
              }
            >
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
            {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={isCollapse} timeout={"auto"} unmountOnExit>
        <List className="ml-4">
          {["Support", "Contact", "Help"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              className={
                pathname.startsWith("/help")
                  ? "text-sky-600 bg-slate-100"
                  : "text-slate-700"
              }
            >
              <ListItemButton>
                <ListItemIcon
                  className={
                    pathname.startsWith("/help")
                      ? "text-sky-600 bg-slate-100"
                      : "text-slate-700"
                  }
                >
                  {index === 0 && <LibraryBooksIcon />}
                  {index === 1 && <RecommendIcon />}
                  {index === 2 && <LiveHelpIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#FFFFFF",
          color: "#2F2F2F",
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
              OpcSmart
            </Typography>

          <div className=" w-screen flex flex-row-reverse ">
            
            <button
              onClick={() => signOut()}
              className=" bg-blue-500 text-white font-bold px-6 py-2 mt-0 rounded-lg"
            >
              Log Out
            </button>
          </div>
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
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        <main>{children}</main>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;
