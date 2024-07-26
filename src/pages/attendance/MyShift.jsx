import { AppBar, Box } from "@mui/material";
import React from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  attendanceData,
  attendanceSummaryData,
  modifiedAttendanceSummaryData,
  myShiftTimeColumns,
  myShiftTimeData,
  myattendanceColumns,
} from "../../configs/data";
import AttendanceSummaryItem from "../../components/dashboard/AttendanceSummaryItem";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";

function MyShift() {
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
        overflowX: "hidden", // Hide horizontal scrollbar
        overflowY: "auto", // Enable vertical scrollbar
        maxHeight: "100vh", //
      }}
    >
      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>
      <Box mt={14}>
        <Title title={"My Shift Time"} subtitle="(January-2024)" buttonText="Shift Timing Change Request" filterButton={2}/>
      </Box>
      <TableLocal data={myShiftTimeData} columns={myShiftTimeColumns} />
    </AppBar>
  );
}

export default MyShift;
