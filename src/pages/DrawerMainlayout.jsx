import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { sizeConfigs } from "../configs/colorConfigs";
import Sidebar from "./Login/FormPanel/Sidebar";
import Dashboard from "./dashoard/Dashboard";
import { useDispatch } from "react-redux";
import { handleDrawerClose } from "../Store/Drawer/DrawerSlice";

const DrawerMainlayout = () => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const isScreenSize992 = useMediaQuery("(min-width: 992px)");

  console.log(isScreenSize992);

  //   const handleDrawerClose = () => {
  //   setOpen((prev)=>!prev);
  // };

  // useEffect(() => {
  //   if (isScreenSize992) {
  //     dispatch(handleDrawerClose(false));
  //   }
  // }, [isScreenSize992]);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          backgroundColor: "oange",
        }}
      >
        {isScreenSize992 && <Sidebar />}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "ellow",
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DrawerMainlayout;
