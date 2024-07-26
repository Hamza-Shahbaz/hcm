import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { taskitemThemes } from "../../configs/data";

// Define a list of themes with background and border colors

// Function to get a random theme
function getRandomTheme() {
  return taskitemThemes[Math.floor(Math.random() * taskitemThemes.length)];
}

function TaskItem({ title }) {
  // Use useMemo to get a new random theme each time the component renders
  const theme = useMemo(() => getRandomTheme(), []);

  return (
    <Box
      display="flex"
      alignItems="center"
      pl={1}
      py={1}
      sx={{
        backgroundColor: theme.backgroundColor,
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        maxWidth: "200px",
        zIndex: 100,
        position: "absolute",
        overflow: "hidden",
        // position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          backgroundColor: theme.borderColor,
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          //   overflow:"hidden"
        }}
      />
      <Box ml={1} mr={2}>
        <Typography fontSize={14} sx={{ color: theme.textColor }}>
          Task Desc:
        </Typography>
        <Typography fontSize={11} sx={{ color: theme.textColor }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default TaskItem;
