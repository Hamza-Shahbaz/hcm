import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import AttendanceSummaryItem from "./AttendanceSummaryItem";
import { attendanceSummaryData } from "../../configs/data";
import Title from "../text/Title";

function AttendanceSummary({ data }) {
  return (
    <Box sx={{ mt: "6rem" }}>
      <Title
        title="My Attendance Summary"
        subtitle="(January-2024)"
        filterButton={1}
      />
      <Box sx={{ px: "1.7rem", my: "10px", backgroundColor: "re" }}>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.text1}>
              <AttendanceSummaryItem
                text1={item?.text1}
                text2={item?.text2}
                text3={item?.text3}
                value={item?.val}
                backgroundColor={item?.backgroundColor}
                borderColor={item?.borderColor}
                isType={true}
                type={1}
                isProgressbarShown={true}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default AttendanceSummary;
