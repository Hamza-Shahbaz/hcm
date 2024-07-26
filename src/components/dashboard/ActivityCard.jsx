import { Box, Typography } from "@mui/material";
import React from "react";
import ActivitycardItem from "./ActivitycardItem";
import FilterListIcon from "@mui/icons-material/FilterList";

import {
  activity1_Data,
  activity2_Data,
  activity3_Data,
} from "../../configs/data";
import filterIcon from "../../assets/images/filterIcon.png";
import { PieChart } from "@mui/x-charts/PieChart";

const pieData = [
  { id: 0, value: 5, color: "#008EFF" },
  { id: 1, value: 65, color: "#16C098" },
  { id: 2, value: 65, color: "#4C5CB0" },
];

function ActivityCard({
  isItemShown,
  headingName,
  heading2_Shown,
  iconShown,
  pieChartShown,
}) {
  return (
    <Box
      sx={{
        padding: "5px",
        px: "15px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        border: `3px solid #fff`,
        boxShadow: "5px 3px 6px 2px rgba(95, 95, 95, 0.25)",
        position: "relative",
        mx: "14px",
        minHeight: "100%",
        // width: "100%",
        // minWidth: '30%'
        // width: '100%'
        // flex: 1
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
        <Box sx={{ pl: "10px", pb: "5px" }}>
          <Typography variant="h7" sx={{ fontWeight: "500", color: "#000" }}>
            {headingName}
          </Typography>
        </Box>

        {iconShown ? (
          <Box>
            <img src={filterIcon} style={{ width: "30px" }} alt="Filter Icon" />
          </Box>
        ) : null}
      </Box>

      {heading2_Shown ? (
        <Box sx={{ pl: "10px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "normal", color: "#848D9A", pt: "4px" }}
          >
            As of now August 28, 2023.
          </Typography>
        </Box>
      ) : null}

      {pieChartShown ? (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yelow",

            my: 2,
          }}
        >
          <PieChart
            series={[
              {
                data: pieData,
              },
            ]}
            width={250}
            height={250}
            sx={{
              position: "relative",
              backgroundColor: "puple",
              transform: "translate(48px, -1px)",
            }}
          />
          <Box
            height={120}
            width={120}
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "50%",

              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Total Leave
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#008EFF" }}
            >
              16
            </Typography>
          </Box>
        </Box>
      ) : null}

      {isItemShown === 1 ? (
        activity1_Data.map((item) => {
          return (
            <ActivitycardItem
              text1={item?.text1}
              text2={item?.text2}
              text3={item?.text3}
              dotBackgroundcolor={item?.backgroundColor}
              dotBordercolor={item?.borderColor}
              listBgcolor={item?.backgroundColor}
              listBordercolor={item?.borderColor}
              textcolor={item?.bgColor}
              head={1}
            />
          );
        })
      ) : isItemShown === 2 ? (
        activity2_Data.map((item) => {
          return (
            <Box>
              <ActivitycardItem
                activitytext1={item?.text1}
                activitytext2={item?.text2}
                image={item?.image}
                head={2}
              />
            </Box>
          );
        })
      ) : isItemShown === 3 ? (
        <Box display={"flex"} my={"10px"}>
          {activity3_Data.map((item) => {
            return (
              <Box>
                <ActivitycardItem
                  head={3}
                  itemImage={item?.image}
                  authorityPosition={item?.text1}
                  authorityName={item?.text2}
                />
              </Box>
            );
          })}
        </Box>
      ) : null}
    </Box>
  );
}

export default ActivityCard;
