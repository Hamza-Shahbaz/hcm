import React from "react";
import { Box, Typography } from "@mui/material";
import { randomTime } from "../../configs/data";


function MessageItem({ message, direction }) {

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ backgroundColor: "" }}
      alignItems={direction}
      // justifyContent={"space-between"}
      px={4}
      py={1.8}
      mx={1}
    >

      <Box>
        <Box
          overflow="hidden"
          py={2}
          px={2}
          sx={{
            backgroundColor: direction === "flex-start" ? "#DCE6FF" : "#44C9BC",
            color: direction === "flex-start" ? "black" : "white",

            maxWidth: 600,
            borderRadius:
              direction === "flex-start"
                ? "1000px 1000px 1000px 0"
                : "1000px 1000px 0 1000px",
            width: "fit-content",
            alignSelf: "flex-start",
            overflow: "hidden",
          }}
        >
          <Typography my={1} mx={1} sx={{ backgroundColor: "" }}>
            {message}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "",
            alignSelf: "flex-end",
            textAlign: direction === "flex-start" ? "left" : "right",
          }}
        >
          <Typography sx={{ color: "#AFB8CF", backgroundColor: "" }}>
            {randomTime()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageItem;
