import React from "react";
import { Box, Typography } from "@mui/material";
import plusRed from "../../assets/images/plus-red.png";

function AddTask() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        py: 2,
        px: 3,

        mx: 3,
        my: 2,
        borderRadius: 3,
      }}
      backgroundColor={"#F25D5A"}
    >
      <Box height={34} width={34}>
        <img height={"100%"} width={"100%"} src={plusRed} alt="" srcset="" />
      </Box>
      <Box ml={2}>
        <Typography color="white" variant="h4">
          Add New Task
        </Typography>
      </Box>
    </Box>
  );
}

export default AddTask;
