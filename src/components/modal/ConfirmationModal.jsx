import { Box, Typography } from "@mui/material";
import React from "react";
import ModalLogo from "../../assets/images/ModalLogo1.png";
import CloseIcon from "../../assets/images/close.png";
import MainInput from "../base/MainInput";
import ButtonBase from "../base/Button";

function ConfirmationModal({
  onClose,
  title,
  subtitle,
  width,
  height,
  selectMenuItems,
  buttonText1,
  buttonText2,
  labelName,
  type,
}) {
  return (
    <Box width={width} height={height}>
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
          <Typography textAlign={"center"} py={subtitle ? 2 : 0} variant="h8">
            {subtitle}
          </Typography>
        </Box>

        {type === "Calculate Payroll" ? (
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
        ) : type === "Account Identification" ? (
          <Box px={15}>
            <MainInput type={"normalInput"} placeholderText={"Enter your Password"}/>
          </Box>
        ) : null}
      </Box>

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

export default ConfirmationModal;
