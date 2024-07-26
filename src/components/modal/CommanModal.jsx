import { Box, Typography } from "@mui/material";
import React from "react";
import ModalLogo from "../../assets/images/ModalLogo1.png";
import CloseIcon from "../../assets/images/close.png";
import MainInput from "../base/MainInput";
import ButtonBase from "../base/Button";

function CommanModal({
  onClose,
  title,
  subtitle,
  width,
  height,
  selectMenuItems,
  buttonText1,
  buttonText2,
  type,
}) {
  return (
    <Box width={width} height={height}>
      <Box
        borderBottom="1px solid #E4E7EC"
        p={3}
        display="flex"
        justifyContent="space-between"
        sx={{ backgroundColor: "" }}
      >
        <Box display="flex" alignItems="center">
          <Box mr={1} width={48} height={45}>
            <img src={ModalLogo} alt="Modal Logo" width="100%" />
          </Box>
          <Box>
            <Typography variant="h7">{title}</Typography>
            <Typography variant="h5">{subtitle}</Typography>
          </Box>
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={() => onClose(false)}>
          <img src={CloseIcon} alt="Close Icon" width={24} />
        </Box>
      </Box>

      {type === "AttendanceRequest" ? (
        <Box sx={{ backgroundColor: false && "#f0eee9" }}>
          <MainInput
            isLabelName={true}
            sidelabelName="Attendance Day(s)*"
            type={"select"}
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Selector Attendance Date*"}
            type={"datepicker"}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Upload image*"}
            border
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Mark My Attendance*"}
            type="select"
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Description*"}
            type="textarea"
          />
        </Box>
      ) : type === "RemoteWorkRequest" ? (
        <Box sx={{ backgroundColor: false && "#f0eee9" }}>
          <MainInput
            isLabelName={true}
            sidelabelName="Attendance Day(s)*"
            type={"select"}
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Selector Attendance Date*"}
            type={"datepicker"}
            borderBottom
            style={{ pb: 2 }}
          />

          <MainInput
            isLabelName={true}
            sidelabelName={"Description*"}
            type="textarea"
            style={{ py: 3 }}
          />
        </Box>
      ) : type === "LeaveRequest" ? (
        <Box sx={{ backgroundColor: false && "#f0eee9" }}>
          <MainInput
            isLabelName={true}
            sidelabelName="Leave Day(s)*"
            type={"select"}
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Select Date*"}
            type={"datepicker"}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Upload image*"}
            border
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Leave Type*"}
            type="select"
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Description*"}
            type="textarea"
          />
        </Box>
      ) : type === "Salary Request" ? (
        <Box sx={{ backgroundColor: false && "#f0eee9" }}>
          <MainInput
            isLabelName={true}
            sidelabelName="Advance Amount*"
            type={"select"}
            menuItems={selectMenuItems}
          />

          <MainInput
            isLabelName={true}
            sidelabelName={"Payback Date*"}
            type={"datepicker"}
            borderBottom
            style={{ pb: 2 }}
          />

          <MainInput
            isLabelName={true}
            sidelabelName={"Reason*"}
            type="textarea"
            style={{ py: 2 }}
          />
        </Box>
      ) : type === "Reimbursement Request" ? (
        <Box sx={{ backgroundColor: false && "#f0eee9" }}>
          <MainInput
            isLabelName={true}
            sidelabelName="Expense Type*"
            type={"select"}
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Expense Date*"}
            type={"datepicker"}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Expense Attachment*"}
            border
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Expense Amount*"}
            type="select"
            menuItems={selectMenuItems}
          />
          <MainInput
            isLabelName={true}
            sidelabelName={"Expense Reason*"}
            type="textarea"
          />
        </Box>
      ) : null}

      <Box
        width={"100%"}
        display="flex"
        py={2}
        sx={{ backgroundColor: "", borderTop: "1px solid #D0D5DD" }}
      >
        <ButtonBase
          text={buttonText1}
          color={"black"}
          background={"white"}
          onClick={() => onClose(false)}
        />
        <ButtonBase text={buttonText2} color={"white"} background={"#27928E"} />
      </Box>
    </Box>
  );
}

export default CommanModal;
