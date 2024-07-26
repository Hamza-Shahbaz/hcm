import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import backIcon from "../../../assets/backwardIcon.png";
import forwardIcon from "../../../assets/forwardIcon.png";
import navbarLogo from "../../../assets/navbarLogo.png";
import colorConfigs, { sizeConfigs } from "../../../configs/colorConfigs";
import appRoutes from "../../../routes/appRoutes";
import { colors } from "@mui/material";
import { tokens } from "../../../themes/themePalette";
import { useSelector, useDispatch } from "react-redux";
import { handleDrawerClose } from "../../../Store/Drawer/DrawerSlice";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ onDrawerClose77, isDarwerOpen }) => {
  const theme = useTheme();
  // const [open, setOpen] = useState(false);
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  // const handleDrawerClose = () => {
  //   setOpen(!open);
  // };

  return (
    <Drawer
      variant="permanent"
      open={isDrawerOpen}
      sx={{
        width: isDrawerOpen ? sizeConfigs.sidebar.width : "100%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          // width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "0px",

          backgroundColor: colors.primary[500],
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <DrawerHeader
        sx={{
          backgroundColor: colors.primary[500],
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // width:`calc(100% - ${sizeConfigs.sidebar.width})`
          // borderBottom: "2px dashed #BFBFBF",
        }}
      >
        {isDrawerOpen ? (
          <Box sx={{ marginLeft: "6px" }}>
            <img
              src={navbarLogo}
              alt="Source Code"
              style={{
                width: "130px",
                objectFit: "contain",
                display: "flex",
              }}
            />
          </Box>
        ) : null}

        <Box
          onClick={() => {
            dispatch(handleDrawerClose(!isDrawerOpen));
          }}
          // onClick={handleDrawerClose}
          sx={{ display: "flex", justifyContent: "center" }}
        >          
          {isDrawerOpen ? (
            <img
              src={backIcon}
              alt="Source Code"
              style={{
                height: "55%",
                width: "55%",
                objectFit: "contain",
                display: "flex",
                justifyContent: "center",
              }}
            />
          ) : (
            <img
              src={forwardIcon}
              alt="Source Code"
              style={{
                height: "55%",
                width: "55%",
                objectFit: "contain",
                display: "flex",
                justifyContent: "center",
              }}
            />
          )}
        </Box>
      </DrawerHeader>

      <List disablePadding>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
