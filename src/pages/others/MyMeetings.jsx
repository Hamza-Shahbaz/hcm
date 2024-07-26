import { AppBar, Box } from "@mui/material";
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
import FormModal from "../../components/modal/FormModal";

function MyMeetings() {
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
        <FormModal
          title={"Schedule a meeting"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClose={setOpen}
          width={743}
          selectMenuItems={["As Present", "Check out", "Check in"]}
          type={"My Meeting"}
          buttonText1={"Cancel"}
          buttonText2={"Submit"}
        />
      </GeneralModal>

      <Box mt={14}>
        <Title
          filterButton={2}
          title={"My Meetings"}
          subtitle=""
          buttonText={"Schedule a meeting"}
          onClick={() => setOpen(true)}

        />
      </Box>



      <TableLocal data={myMeetingsData} columns={myMeetingsColumns} />
    </AppBar>
  );
}

export default MyMeetings;
