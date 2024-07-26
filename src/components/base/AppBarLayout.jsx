import React, { useEffect } from "react";
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawerClose } from "../../Store/Drawer/DrawerSlice";
import { sizeConfigs } from "../../configs/colorConfigs";
import colorConfigs from "../../configs/colorConfigs";
import TopBar from "../../components/dashboard/TopBar";

const AppBarLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isScreenSize992 = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (isScreenSize992) {
      dispatch(handleDrawerClose(false));
    }
  }, [isScreenSize992]);

  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isDrawerOpen
          ? `calc(100% - ${sizeConfigs.sidebar.width})`
          : isScreenSize992
          ? "96%"
          : "100%",
        transition: "none",
        boxShadow: "unset",
        backgroundColor: "",
        color: colorConfigs.topbar.color,
        overflowX: "hidden", // Hide horizontal scrollbar
        overflowY: "auto", // Enable vertical scrollbar
        maxHeight: "100vh", //
        "& .MuiAppBar-root": {
          // backgroundColor:"purple"
        },
      }}
    >
      {/* <Toolbar /> */}
      {/* <Box sx={{ p: 0 }}>{children}</Box> */}
      {children}
    </AppBar>
  );
};

export default AppBarLayout;
