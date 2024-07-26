import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  attendanceRequestColumns,
  attendanceRequestData,
} from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import GeneralModal from "../../components/modal/GeneralModal";
import CommanModal from "../../components/modal/CommanModal";

function AttendanceRequest() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [open, setOpen] = useState(false);

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
      <GeneralModal open={open} onClose={setOpen}>
        <CommanModal
          title={"Apply For Attendance Request"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          selectMenuItems={["Single Day", "Multile Day"]}
          type={"AttendanceRequest"}
          buttonText1={"Cancel"}
          buttonText2={"Confirm"}
        />
      </GeneralModal>

      <TopBar IsTopBarSearchEnable topdownType={"simple"} isTopDownVisible/>
      <Box mt={14}>
        <Title
          filterButton={2}
          title={"My Attendance Requests"}
          subtitle="(January-2024)"
          buttonText={"Attendance Request"}
          onClick={() => setOpen(true)}
        />
      </Box>

      <Box>
        <TableLocal
          data={attendanceRequestData}
          columns={attendanceRequestColumns}
        />
      </Box>
    </AppBar>
  );
}

export default AttendanceRequest;
