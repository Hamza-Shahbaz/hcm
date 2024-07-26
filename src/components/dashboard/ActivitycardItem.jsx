import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes/themePalette";
import Profile from "../../assets/images/profile.png";

function ActivitycardItem({
  head,
  text1,
  text2,
  text3,
  dotBackgroundcolor,
  dotBordercolor,
  listBgcolor,
  listBordercolor,
  textcolor,
  activitytext1,
  activitytext2,
  image,
  itemImage,
  authorityName,
  authorityPosition
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return head === 1 ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        my: "10px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          width={"10px"}
          height={"10px"}
          borderRadius={"50%"}
          sx={{
            backgroundColor: dotBackgroundcolor,
            border: `2px solid ${dotBordercolor}`,
          }}
        ></Box>

        <Box sx={{ pl: "10px", maxWidth: "90%" }}>
          <Typography
            variant="h9"
            sx={{
              color: "#000",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {text1}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ px: "15px" }}>
          <Typography variant="h9" sx={{ fontWeight: "500", color: "#000" }}>
            {text2}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: listBgcolor,
            padding: "3px",
            borderRadius: "30px",
            px: "12px",
            opacity: 0.7,
            border: `1px solid ${listBordercolor}`,
          }}
        >
          <Typography variant="h9" sx={{ color: textcolor }}>
            {text3}
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : head === 2 ? (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        borderRadius: "14px",
        ml: "7px",
        my: "12px",
        width: "100%",
        pr: '35px'
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{ px: "10px", py: "10px" }}
      >
        <Box>
          <img src={image} style={{ width: "30px" }} />
        </Box>

        <Box pl={"10px"} sx={{ wordBreak: "break-all" }}>
          <Typography variant="h8">{activitytext1}</Typography>
          <Typography variant="h5">{activitytext2}</Typography>
        </Box>
      </Box>
    </Box>
  ) : head === 3 ? (
    <Box mx={'10px'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
      <img
      
        src={itemImage}
        
        style={{
          width: "110px",
          borderRadius: "10px",
          // objectFit:'cover'
        }}
      />

      <Box alignItems={'center'} display={'flex'} flexDirection={'column'} mt={'14px'}>
      <Typography variant="h5" fontWeight={'500'} textAlign={'center'}>{authorityPosition}</Typography>
      <Typography variant="h8" color={'#26327A'} textAlign={'center'}>{authorityName}</Typography>

      </Box>


    </Box>
  ) : null;
}

export default ActivitycardItem;
