import { Box, Typography } from "@mui/material";
import AttendanceStatus from "../text/AttendanceStatus";
import message from "../../assets/images/reqMessage.png";
import attachmentIcon from "../../assets/images/attachmentIcon.png";
import EditActin from "../../assets/images/edit-action.png";
import DelAction from "../../assets/images/del-action.png";
import link from "../../assets/images/link.png";

const TableItem = ({
  row,
  column,
  StyledTableCell,
  statusInfo,
  attSourceTypeBgColor,
  lastRow,
  index,
}) => {
  const renderAttSourceAndStatus = () => {
    const defineItems = {
      AttSource: (
        <StyledTableCell align="center">
          <Box
            sx={{
              py:.5,
              minWidth:128,
              borderRadius: 10,
              backgroundColor:
                row[column.key] === "Mobile Attendance"
                  ? attSourceTypeBgColor?.mobile
                  : attSourceTypeBgColor?.web,
              color: "white",
            }}
          >
            <Typography 
            
            
            >{row[column.key]}</Typography>
          </Box>
        </StyledTableCell>
      ),
      Status: (
        <StyledTableCell align="center">
          <AttendanceStatus
            status={row[column.key]}
            img={statusInfo[row[column.key]]?.status}
            textcolor={statusInfo[row[column.key]]?.color}
          />
        </StyledTableCell>
      ),
      ApprovalStatus: (
        <StyledTableCell align="center" sx={{ backgroundColor: "" }}>
          <Box
            sx={{
              width: 120,
              alignSelf: "center",
              padding: 0.3,
              borderRadius: 10,
              backgroundColor:
                row[column.key] === "Approved" || row[column.key] === "Selected"
                  ? attSourceTypeBgColor?.approved
                  : attSourceTypeBgColor?.notApproved,
              color: "white",
              margin: "0 auto",
            }}
          >
            {row[column.key]}
          </Box>
        </StyledTableCell>
      ),
      loanStatus: (
        <StyledTableCell align="center" sx={{ backgroundColor: "" }}>
          <Box
            sx={{
              width: 120,
              alignSelf: "center",
              padding: 0.3,
              borderRadius: 10,
              backgroundColor:
                row[column.key] === "Approved"
                  ? attSourceTypeBgColor?.approved
                  : attSourceTypeBgColor?.notApproved,
              color: "white",
              margin: "0 auto",
            }}
          >
            {row[column.key]}
          </Box>
        </StyledTableCell>
      ),
      Message: (
        <StyledTableCell align="center">
          <img src={message} width={24} alt="" />
        </StyledTableCell>
      ),
      Attachment: (
        <StyledTableCell align="center">
          <img src={attachmentIcon} width={24} alt="" />
        </StyledTableCell>
      ),
      Action: (
        <StyledTableCell align="center">
          <Box
            sx={{
              backgroundColor: "",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img src={EditActin} width={20} alt="" />
            <img src={DelAction} width={14} alt="" />
          </Box>
        </StyledTableCell>
      ),
      RequestMessage: (
        <StyledTableCell align="center">
          <img src={message} width={24} alt="" />
        </StyledTableCell>
      ),
      ApproverMessage: (
        <StyledTableCell align="center">
          <img src={message} width={24} alt="" />
        </StyledTableCell>
      ),
      MeetingStatus: (
        <StyledTableCell align="center">
          <Box
            sx={{
              width: 120,
              alignSelf: "center",
              padding: 0.3,
              borderRadius: 10,
              backgroundColor:
                row[column.key] === "Done"
                  ? attSourceTypeBgColor?.approved
                  : attSourceTypeBgColor?.notApproved,
              color: "white",
              margin: "0 auto",
            }}
          >
            {row[column.key]}
          </Box>
        </StyledTableCell>
      ),
      MeetingLink: (
        <StyledTableCell align="center">
          <img src={link} width={13.5} alt="" />
        </StyledTableCell>
      ),
      deskStatus: (
        <StyledTableCell align="center" sx={{ backgroundColor: "" }}>
          <Box
            sx={{
              width: 120,
              alignSelf: "center",
              padding: 0.3,
              borderRadius: 10,
              backgroundColor:
                row[column.key] === "Approved" || row[column.key] === "Selected"
                  ? attSourceTypeBgColor?.approved
                  : attSourceTypeBgColor?.notApproved,
              color: "white",
              margin: "0 auto",
            }}
          >
            {row[column.key]}
          </Box>
        </StyledTableCell>
      ),
    };

    const renderedItem = defineItems[column.key] || (
      <StyledTableCell align="center">{row[column.key]}</StyledTableCell>
    );

    return (
      <>
        {defineItems[column.key] || (
          <StyledTableCell align="center">{row[column.key]}</StyledTableCell>
        )}
      </>
    );
  };

  return renderAttSourceAndStatus();
};

export default TableItem;
