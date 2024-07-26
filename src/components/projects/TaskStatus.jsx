import React from "react";
import { Box, Typography, Button } from "@mui/material";
import dotsHorizontal from "../../assets/images/dots-horizontal.png";

function TaskStatus({ title, color, bgColor }) {
  return (
    <Box display={"flex"}>
      <Box flex={1} display={"flex"} alignItems={"center"}>
        <Box mr={2}>
          <Typography fontWeight={"500"} variant="h5">
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: bgColor || "rgba(234, 179, 8, 0.10)",
            opacity: "100%",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={24}
          height={24}
          borderRadius={"50%"}
        >
          <Typography fontWeight={"bold"} color={color || "rgba(234, 179, 8)"}>
            5
          </Typography>
        </Box>
      </Box>
      <Box>
        <img src={dotsHorizontal} width={16} height={4} alt="" />
      </Box>
    </Box>
  );
}

export default TaskStatus;
