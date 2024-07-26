import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes/themePalette";
import dotIcon from "../../assets/images/3Dot.png";
import image from "../../assets/activityIcon2.png";

function EventcardItem({
  text1,
  text2,
  scheduledtext,
  timetext,
  isCalender,
  imagePath,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    alert("here");
  };

  return (
    <Box
      sx={{
        display: "flex",
        // backgroundColor: "#F9F9F9",
        // borderRadius: "14px",
        // ml: "7px",
        my: isCalender ? "20px" : "7px",
        // width: "100%",
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
        {isCalender ? (
          <Box
            sx={{
              backgroundColor: "#F5F6FA",
              p: "2px",
              borderRadius: "10px",
              px: "10px",
            }}
          >
            <Typography variant="h5" color={"#FFA600"}>
              {text1}
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              {text2}
            </Typography>
          </Box>
        ) : (
          <Box>
            <img
              src={imagePath}
              style={{
                width: "70px",
                border: "1px solid #F0F0F0",
                borderRadius: "10px",
              }}
            />
          </Box>
        )}

        <Box pl={"10px"} sx={{ wordBreak: "break-all" }}>
          <Typography variant="h8">{scheduledtext}</Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "normal", color: "#848D9A" }}
          >
            {timetext}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img src={dotIcon} style={{ width: "30px" }} alt="Filter Icon" />
      </Box>
    </Box>
  );
}

export default EventcardItem;
