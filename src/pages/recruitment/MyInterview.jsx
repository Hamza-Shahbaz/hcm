import { AppBar, Box } from "@mui/material";
import React from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  interviewRequestColumns,
  interviewRequestData,
} from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import ApplyForm from "../../components/base/ApplyForm";
import GeneralModal from "../../components/modal/GeneralModal";

function MyInterview() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);

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
        <ApplyForm onClose={setOpen} />
      </GeneralModal>

      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"} />
      <Box mt={14}>
        <Title
          title={"My Interviews"}
          filterButton={false}
          //   subtitle="(January-2024)"
          buttonText={"Apply for Leave"}
          onClick={() => setOpen(true)}
        />
      </Box>

      <Box>
        <TableLocal
          columns={interviewRequestColumns}
          data={interviewRequestData}
        />
      </Box>
    </AppBar>
  );
}

export default MyInterview;
