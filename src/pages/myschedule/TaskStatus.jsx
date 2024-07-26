import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TaskStatus = ({ title, month, type }) => {
  return (
    <Box px={2}>
      <Box pb={2}>
        <Typography>{title}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: type === 1 ? "white" : "#29A095",
          color: type === 1 ? "Black" : "white",
          p: 1,
          borderRadius: 3,
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Box flex={1} sx={{ backgroundColor: "re", mx: 1, pr: 1 }}>
          <Box>
            <Typography fontSize={12} fontWeight={200}>
              {month}
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "re", width: 70 }}>
            <Typography fontSize={10} fontWeight={200}>
              205 file via mail
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: type === 1 ? "#DCE6FF" : "#44C9BC",

            px: 1,
            py: 2,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              m: 0.5,
              height: 5,
              width: 5,
              borderRadius: "50%",
              backgroundColor: type === 1 ? "#3D64FD" : "white",
            }}
          ></Box>
          <Box
            sx={{
              m: 0.5,
              height: 5,
              width: 5,
              borderRadius: "50%",
              backgroundColor: type === 1 ? "#3D64FD" : "white",
            }}
          ></Box>
          <Box
            sx={{
              height: 5,
              m: 0.5,
              width: 5,
              borderRadius: "50%",
              backgroundColor: type === 1 ? "#3D64FD" : "white",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

TaskStatus.propTypes = {
  title: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  fileCount: PropTypes.number.isRequired,
  themeColor: PropTypes.oneOf(["light", "dark"]).isRequired,
};

export default TaskStatus;
