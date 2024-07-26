import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  payslipsData,
  payslipsRequestColumns,
  salaryRequestColumns,
  salaryRequestData,
} from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import ApplyForm from "../../components/base/ApplyForm";
import GeneralModal from "../../components/modal/GeneralModal";
import CommanModal from "../../components/modal/CommanModal";

function MySalaryRequest() {
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
          title={"Advance Salary Request"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          selectMenuItems={["5000/=", "10,000/=", "3000/="]}
          type={"Salary Request"}
          buttonText1={"Cancel"}
          buttonText2={"Submit"}
        />
      </GeneralModal>

      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>
      <Box mt={14}>
        <Title
          title={"My Advance Salary Requests"}
          filterButton={2}
          buttonText={"Advance Salary Requests"}
          onClick={() => setOpen(!open)}
        />
      </Box>

      <Box>
        <TableLocal columns={salaryRequestColumns} data={salaryRequestData} />
      </Box>
    </AppBar>
  );
}

export default MySalaryRequest;
