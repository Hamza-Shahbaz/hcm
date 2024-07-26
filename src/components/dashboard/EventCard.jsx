import { Box, Button, Typography } from "@mui/material";
import React from "react";
import filterIcon from "../../assets/images/filterIcon.png";
import EventcardItem from "./EventcardItem";
import { event_Data } from "../../configs/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function EventCard({ headingName, type , iconShown , isCalender}) {
  return (
    <Box
      sx={{
        // width: "100%",
        // padding: "5px",
        minHeight: '100%',
        px: "20px",
        mx: '14px',

        // marginBottom: "90px",
        backgroundColor: "#fff",
        // m: "10px",
        borderRadius: "15px",
        border: `1px solid #fff`,
        boxShadow: "-1px 1px 6px 2px rgba(95, 95, 95, 0.25)",
        // position: "relative",
        // pb: "10px",
        // ml: "25px",
        // flex: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "10px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h7" sx={{ fontWeight: "500", color: "#000" }}>
          {headingName}
        </Typography>
        {iconShown ? (
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Button
              variant="contained"
              disableElevation
              endIcon={<KeyboardArrowDownIcon fontSize="small" />}
              sx={{
                fontWeight: "500",
                fontSize: "13px",
                borderRadius: "10px",
                p: "8px",
                border: "2px solid #F0F0F0",
              }}
            >
              Create New
            </Button>
          </Box>
        ) : null}
      </Box>

      {type === 1 ? (
        <>
          <Box mt={"10px"}>
            <Typography variant="h9" sx={{ fontWeight: "500", color: "#000" }}>
              Quaid E Azam Day & Christmas
            </Typography>
          </Box>

          <Box mt={"15px"}>
            <Typography variant="h9">Dear Team,</Typography>
            <Typography
              variant="h9"
              paragraph
              pt={"15px"}
              sx={{ lineHeight: "25px" }}
            >
              We wanted to inform you that the office will be closed on{" "}
              <strong>Monday, December 25th, 2023</strong>, in celebration of{" "}
              <strong>Quaid E Azam Day & Christmas</strong>. Please be advised
              that all team members are expected to resume work on{" "}
              <strong>Tuesday, December 26th, 2023</strong>. Work from home or
              leave requests on this day will not be permitted, and absences may
              result in sandwich leave deduction as per company policy. We wish
              you a delightful holiday filled with joy and relaxation.
            </Typography>
            <Typography variant="h9">Best Regards,</Typography>
          </Box>
        </>
      ) : type === 2 ? (
        event_Data.map((item) => {
          return (
            <EventcardItem
              text1={item?.text1}
              text2={item?.text2}
              scheduledtext={item?.scheduledtext}
              timetext={item?.timetext}
              imagePath={item?.image}
              isCalender={isCalender}
              
            />
          );
        })
      ) : null}
    </Box>
  );
}

export default EventCard;
