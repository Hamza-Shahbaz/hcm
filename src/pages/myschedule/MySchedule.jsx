import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";

import Calendar from "../../components/calendar/Calendar";

function MySchedule() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isDrawerOpen
          ? `calc(100% - ${sizeConfigs.sidebar.width})`
          : "96%",
        transition: "width 0.2s ease-in-out",
        boxShadow: "unset",
        backgroundColor: "",
        color: colorConfigs.topbar.color,
        overflowX: "auto", // Hide horizontal scrollbar
        // overflowY: "clip", // Enable vertical scrollbar
        maxHeight: "100vh", //
      }}
    >
      <TopBar
        topdownType={"chat"}
        topdownMainTitle="My Schedule"
        IsTopBarSearchEnable={false}
        isTopDownVisible
      />
      <Box
        sx={{
          backgroundColor: "rd",
          py: 2,
        }}
      >
        <Box
          display={"flex"}
          mt={8}
          // mb={5}
          mx={3}
          sx={{
            // border: "1px solid #ede9e8",
            borderRadius: 2,
            backgroundColor: "rd",
            minWidth: 600,
            boxShadow: "1px 4px 5px -1px rgba(212,199,199)",
          }}
        >
          <Calendar />

          {/* <Container>
            <Box my={4}>
            </Box>
          </Container> */}
        </Box>
      </Box>
      {/* <Scheduler /> */}
    </AppBar>
  );
}

export default MySchedule;
