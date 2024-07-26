import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import bell from "../../assets/images/bell.png";
import ReminderItem from "./ReminderItem";

const Reminders = ({ title, month, fileCount, themeColor }) => {
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        mx: 3,
        my: 2,
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={1}
      >
        <Box>
          <Typography variant="h5">Reminders</Typography>
        </Box>
        <Box
          sx={{
            height: 24,
            width: 24,
            backgroundColor: "#F8F9FD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <img src={bell} width={12} height={15} alt="" />
        </Box>
      </Box>
      <Box>
        <ReminderItem />
        <ReminderItem />
      </Box>
    </Box>
  );
};

export default Reminders;
