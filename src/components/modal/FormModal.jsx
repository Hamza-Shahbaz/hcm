import { Box, Typography } from "@mui/material";
import React from "react";
import ModalLogo from "../../assets/images/ModalLogo1.png";
import CloseIcon from "../../assets/images/close.png";
import MainInput from "../base/MainInput";
import ButtonBase from "../base/Button";

function FormModal({
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
      <Box sx={{ backgroundColor: "" }}>
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

        {type === "Loan Request" ? (
          <Box>
            <Box display="flex" sx={{ backgroundColor: "", py: 1 }}>
              <Box flex={1}>
                <Box px={3.4} pt={1}>
                  <Typography variant="h8">Loan Amount*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
                <Box px={3.4}>
                  <Typography variant="h8">Loan Deduction*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
                <Box px={3.4}>
                  <Typography variant="h8">
                    Loan Deduction Start Period*
                  </Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"datepicker"}
                  menuItems={selectMenuItems}
                />
              </Box>
              <Box flex={1}>
                <Box px={3.4} pt={1}>
                  <Typography variant="h8">Loan Type*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
                <Box px={3.4}>
                  <Typography variant="h8">Loan Deduction Amount*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
                <Box px={3.4}>
                  <Typography variant="h8">
                    Expected Months of Deduction*
                  </Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #D0D5DD" }} py={1} mb={1}>
              <Box px={3.4}>
                <Typography variant="h8">Reason</Typography>
              </Box>
              <MainInput sidelabelName={"Description*"} type="textarea" />
            </Box>
          </Box>
        ) : type === "My Meeting" ? (
          <Box>
            <Box display="flex" >
              <Box flex={1} >
                <Box px={3.4} pt={1}>
                  <Typography variant="h8">Meeting Type*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
              </Box>
            </Box>

            <Box display="flex" sx={{ pb: 1 }}>
              <Box flex={1} >
                <Box px={3.4} pt={1}>
                  <Typography variant="h8">Meeting Title*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  type={"normalInput"}
                  placeholderText={"Enter Title"}
                //   menuItems={selectMenuItems}
                />
                
                
                <Box px={3.4}>
                  <Typography variant="h8">
                  Meeting Date*
                  </Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"datepicker"}
                  menuItems={selectMenuItems}
                />
              </Box>
              <Box flex={1} >
                <Box px={3.4} pt={1}>
                  <Typography variant="h8">Meeting With*</Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
               
                
                <Box px={3.4}>
                  <Typography variant="h8">
                  Meeting With*
                  </Typography>
                </Box>
                <MainInput
                  isLabelName={false}
                  sidelabelName="Attendance Day(s)*"
                  type={"select"}
                  menuItems={selectMenuItems}
                />
              </Box>
            </Box>
            <Box sx={{ borderTop: "1px solid #D0D5DD" }} py={1} mb={1}>
              <Box px={3.4}>
                <Typography variant="h8">Meeting Description*</Typography>
              </Box>
              <MainInput sidelabelName={"Description*"} type="textarea" />
            </Box>
          </Box>
        ) : null}
      </Box>

      <Box
        width={"100%"}
        display="flex"
        py={2}
        sx={{ borderTop: "1px solid #D0D5DD" }}
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

export default FormModal;
