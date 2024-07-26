import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import { remoteRequestColumns, remoteRequestData } from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import GeneralModal from "../../components/modal/GeneralModal";
import CommanModal from "../../components/modal/CommanModal";

function MyRemoteWorkRequest() {
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
      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>

      <GeneralModal open={open} onClose={setOpen}>
        <CommanModal
          title={"Remote Work Request"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          isAllowUpload={false}
          selectMenuItems={["As Present", "Check out", "Check in"]}
          type={"RemoteWorkRequest"}
          buttonText1={"Cancel"}
          buttonText2={"Confirm"}
        />
      </GeneralModal>

      <Box mt={14}>
        <Title
          title={"My Remote Work Request"}
          subtitle="(January-2024)"
          buttonText="Request"
          onClick={() => setOpen(true)}
          filterButton={2}
        />
      </Box>
      <TableLocal data={remoteRequestData} columns={remoteRequestColumns} />
    </AppBar>
  );
}

export default MyRemoteWorkRequest;
