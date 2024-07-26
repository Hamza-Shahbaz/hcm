import React from "react";
import { Box, Typography } from "@mui/material";
import reminder from "../../assets/images/reminder.png";

function ReminderItem() {
  return (
    <Box
      sx={{
        display: "flex",
        py: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      // width={300}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        // sx={{ px: "10px", py: "10px" }}
      >
        {/* {isCalender ? ( */}
        <Box
          sx={{
            backgroundColor: "#FCADBD",
            px: 1.4,
            py: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            // px: "10px",
          }}
        >
          {/* <Box sx={{backgroundColor:"red"}}> */}
          <img
            src={reminder}
            width={20}
            style={{ backgroundColor: "" }}
            alt=""
            srcset=""
          />
          {/* </Box> */}
        </Box>
        {/* ) : ( */}
        {/* <Box>
          <img
            src={imagePath}
            style={{
              width: "70px",
              border: "1px solid #F0F0F0",
              borderRadius: "10px",
            }}
          />
        </Box> */}
        {/* )} */}

        <Box pl={"10px"} sx={{ wordBreak: "break-all" }}>
          <Typography variant="h5">Your Subscription</Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "normal", color: "#3D64FD" }}
          >
            Review Now
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "re",
          height: "100%",
          cursor: "pointer",
        }}
        // onClick={handleClick}
      >
        <Typography variant="h6" color={"#AFB8CF"}>
          6:38 PM
        </Typography>
      </Box>
    </Box>
  );
}

export default ReminderItem;
