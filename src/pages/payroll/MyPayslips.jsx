import { AppBar, Box } from "@mui/material";
import React, { useState } from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import { payslipsData, payslipsRequestColumns } from "../../configs/data";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import ApplyForm from "../../components/base/ApplyForm";
import GeneralModal from "../../components/modal/GeneralModal";
import ConfirmationModal from "../../components/modal/ConfirmationModal";

function MyPayslips() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
      <GeneralModal open={openModal} onClose={setOpenModal}>
        <ConfirmationModal
          title={"Calculate Payroll"}
          onClose={setOpenModal}
          width={750}
          //   height={500}
          isAllowUpload={false}
          selectMenuItems={["Jan 2023 (Current Month)", "Previous Month"]}
          type={"Calculate Payroll"}
          buttonText1={"Cancel"}
          buttonText2={"Calculate Payroll"}
          labelName={"Select Month"}
        />
      </GeneralModal>

      <GeneralModal open={open} onClose={setOpen}>
        <ConfirmationModal
          title={"Account Identification"}
          subtitle={
            "This tab contains personal data that can't be share without profile identification.To view your payslips please enter your current password."
          }
          onClose={setOpen}
          //   width={743}
          //   height={500}
          type={"Account Identification"}
          buttonText1={"Cancel"}
          buttonText2={"Confirm"}
        />
      </GeneralModal>

      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"}/>
      <Box mt={14}>
        <Title
          title={"My Payslips"}
          filterButton={2}
          buttonText={"Calculate Payroll"}
          onClick={() => setOpenModal(!openModal)}
        />
      </Box>

      <Box>
        <TableLocal
          columns={payslipsRequestColumns}
          data={payslipsData}
          onClick={() => setOpen(!open)}
        />
      </Box>
    </AppBar>
  );
}

export default MyPayslips;
