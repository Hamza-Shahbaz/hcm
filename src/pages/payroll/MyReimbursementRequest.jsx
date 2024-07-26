import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  payslipsData,
  payslipsRequestColumns,
  reimbursementData,
  reimbursementRequestColumns,
  reimbursementRequestData,
  salaryRequestColumns,
  salaryRequestData,
} from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import ApplyForm from "../../components/base/ApplyForm";
import AttendanceSummaryItem from "../../components/dashboard/AttendanceSummaryItem";
import GeneralModal from "../../components/modal/GeneralModal";
import CommanModal from "../../components/modal/CommanModal";

function MyReimbursementRequest() {
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
          title={"Add Reimbursement Request"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          selectMenuItems={["Single Day", "Multile Day"]}
          type={"Reimbursement Request"}
          buttonText1={"Cancel"}
          buttonText2={"Submit"}
        />
      </GeneralModal>

      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>
      <Box mt={14}>
        <Title
          title={"My Reimbursement Request(s)"}
          filterButton={2}
          buttonText={"Add a Request"}
          onClick={() => setOpen(!open)}
        />
      </Box>

      <Box
        display={"flex"}
        sx={{
          backgroundColor: "",
          px: "1.7rem",
          mt: "16px",
          width: "100%",
        }}
      >
        {reimbursementData.map((item) => {
          return (
            <AttendanceSummaryItem
              text1={item?.text1}
              text2={item?.text2}
              backgroundColor={"#29AB91"}
              borderColor={"#29AB91"}
            />
          );
        })}
      </Box>

      <Box>
        <TableLocal
          columns={reimbursementRequestColumns}
          data={reimbursementRequestData}
        />
      </Box>
    </AppBar>
  );
}

export default MyReimbursementRequest;
