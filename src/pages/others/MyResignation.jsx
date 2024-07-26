import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  attendanceData,
  attendanceSummaryData,
  loanRequestColumns,
  loanRequestData,
  modifiedAttendanceSummaryData,
  myMeetingsColumns,
  myMeetingsData,
  myattendanceColumns,
  myloanRequestData,
} from "../../configs/data";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import ApplyForm from "../../components/base/ApplyForm";
import AttendanceSummaryItem from "../../components/dashboard/AttendanceSummaryItem";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import GeneralModal from "../../components/modal/GeneralModal";
import MainInput from "../../components/base/MainInput";
import BaseButton from "../../components/base/Button";

function MyResignation() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [open, setOpen] = React.useState(false);
  const [close, setClose] = React.useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EDEDED",
      // backgroundColor: theme.palette.common.black,
      color: "black",
      fontSize: 16,
      // color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      backgroundColor: "",
      alignSelf: "center",
    },
  }));

  // const tableItem = {
  //   Don: (
  //     <StyledTableCell align="center" sx={{ backgroundColor: "" }}>
  //       <Box
  //         sx={{
  //           width: 120,
  //           padding: 0.3,
  //           borderRadius: 10,
  //           backgroundColor:
  //             row[column.key] === "Approved"
  //               ? attSourceTypeBgColor?.approved
  //               : attSourceTypeBgColor?.notApproved,
  //           color: "white",
  //           margin: "0 auto",
  //         }}
  //       >
  //         {row?.[column.key]}
  //       </Box>
  //     </StyledTableCell>
  //   ),
  // }

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
        <ApplyForm
          title={"Schedule a meeting"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          isAllowUpload={false}
          selectMenuItems={["As Present", "Check out", "Check in"]}
          modalType={"tb"}
          buttonText1={"Cancel"}
          buttonText2={"Submit"}
        />
      </GeneralModal>

      <Box mt={14}>
        <Title
          filterButton={2}
          title={"Employee Resignation Form"}
          subtitle=""
          buttonText={"Cancel"}
          // onClick={() => setOpen(true)}
        />
      </Box>

      <Box
        my={2}
        mx={3}
        py={3}
        // px={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "",
          boxShadow: "-1px 1px 3px 3px rgba(235,227,227,0.88)",
          borderRadius: "10px",
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              backgroundColor: "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center",
            }}
            flex={1}
          >
            <Typography px={3.4} variant="h5">
              Employee Name*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"select"}
            />{" "}
            <Typography px={3.4} variant="h5">
              Notice Period Start Date*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"datepicker"}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            flex={1}
          >
            <Typography px={3.4} variant="h5">
              Employee Department*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"select"}
            />
            <Typography px={3.4} variant="h5">
              Notice Period End Date*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"datepicker"}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            flex={1}
          >
            <Typography px={3.4} variant="h5">
              Employee Designation*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"select"}
            />
            <Typography px={3.4} variant="h5">
              Notice Period Total Days*
            </Typography>
            <MainInput
              isLabelName={false}
              sidelabelName="Advance Amount*"
              type={"select"}
            />
          </Box>
        </Box>
        <Box>
          <Typography px={3.4} variant="h5">
            Resignation Message*
          </Typography>
          <MainInput sidelabelName={"Description*"} type="textarea" />
        </Box>
        <Box
          display={"flex"}
          mt={1}
          flexDirection={"column"}
          alignItems={"flex-end"}
          sx={{ backgroundColor: "" }}
        >
          <BaseButton text={"Submit"} color={"white"} background={"#29A095"} />
        </Box>
      </Box>
    </AppBar>
  );
}

export default MyResignation;
