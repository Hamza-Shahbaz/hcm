import { Box, Typography } from "@mui/material";
import React from "react";

function AttendanceStatus({ textcolor, img, status }) {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Box width={24} height={24}>
        <img src={img} alt="" width="100%" />
      </Box>
      <Box>
        <Typography px={1} color={textcolor}>
          {status}
        </Typography>
      </Box>
    </Box>
  );
}

export default AttendanceStatus;
