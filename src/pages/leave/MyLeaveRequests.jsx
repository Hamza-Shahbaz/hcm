import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import { leaveRequestColumns, leaveRequestData } from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import GeneralModal from "../../components/modal/GeneralModal";
import CommanModal from "../../components/modal/CommanModal";

function MyLeaveRequests() {
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
          title={"Apply for Leave"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          // height={626}
          selectMenuItems={["As Present", "Check out", "Check in"]}
          type={"LeaveRequest"}
          buttonText1={'Cancel'}
          buttonText2={'Confirm'}
        />
      </GeneralModal>

      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>
      <Box mt={14}>
        <Title
          title={"My Leave Requests"}
          //   subtitle="(January-2024)"
          buttonText={"Apply for Leave"}
          onClick={() => setOpen(true)}
          filterButton={2}
          // bgColor={"#4763E4"}
        />
      </Box>

      <Box>
        <TableLocal data={leaveRequestData} columns={leaveRequestColumns} />
      </Box>
    </AppBar>
  );
}

export default MyLeaveRequests;
