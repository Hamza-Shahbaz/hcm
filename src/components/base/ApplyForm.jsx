import { Box, Typography } from "@mui/material";
import React from "react";
import ModalLogo from "../../assets/images/ModalLogo1.png";
import CloseIcon from "../../assets/images/close.png";
import MainInput from "./MainInput";
import ButtonBase from "./Button";

function ApplyForm({
  onClose,
  title,
  subtitle,
  isAllowUpload,
  width,
  height,
  selectMenuItems,
  modalType,
  buttonText1,
  buttonText2,
  dropdownInput,
  labelName,
  isSalaryRequest,
}) {
  return (
    <Box width={width} height={height}>
      {modalType === "ApplyForm" ? (
        <>
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

          {isSalaryRequest ? (
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
              />

              <MainInput
                isLabelName={true}
                sidelabelName={"Reason*"}
                type="textarea"
              />
            </Box>
          ) : (
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
              {isAllowUpload && (
                <MainInput
                  isLabelName={true}
                  sidelabelName={"Upload image*"}
                  border
                />
              )}
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
          )}
        </>
      ) : modalType === "Account Identification" ? (
        <>
          <Box
            borderBottom="1px solid #E4E7EC"
            p={1}
            pt={3}
            px={3}
            display="flex"
            justifyContent="space-between"
          >
            <Box sx={{ flex: 1 }}>
              <Box mx="auto" width={110}>
                <img src={ModalLogo} alt="Modal Logo" width="100%" />
              </Box>
            </Box>
            <Box sx={{ cursor: "pointer" }} onClick={() => onClose(false)}>
              <img src={CloseIcon} alt="Close Icon" width={24} />
            </Box>
          </Box>

          <Box py={3}>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              px={10}
            >
              <Typography color={"#26327A"} variant="h4" fontWeight={"600"}>
                {title}
              </Typography>
              <Typography
                textAlign={"center"}
                py={subtitle ? 2 : 0}
                variant="h8"
              >
                {subtitle}
              </Typography>
            </Box>

            {dropdownInput ? (
              <Box>
                <Box px={3.4}>
                  <Typography variant="h8">{labelName}</Typography>
                </Box>
                <MainInput
                  type="select"
                  menuItems={selectMenuItems}
                  style={{ py: 1 }}
                />
              </Box>
            ) : (
              <MainInput type={"normalInput"} menuItems={selectMenuItems} />
            )}
          </Box>
        </>
      ) : modalType === "tb" ? (
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
          <Box>
            <Box display="flex" sx={{ backgroundColor: "", py: 1 }}>
              <Box flex={1}>
                <Box px={3.4}>
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
                <Box px={3.4}>
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
            <Box
              sx={{ backgroundColor: "", borderTop: "1px solid #D0D5DD" }}
              py={1}
              mb={1}
            >
              <Box px={3.4}>
                <Typography variant="h8">Reason</Typography>
              </Box>
              <MainInput sidelabelName={"Description*"} type="textarea" />
            </Box>
          </Box>
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

export default ApplyForm;
