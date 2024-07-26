import { Box, Grid } from "@mui/material";
import React from "react";
import TopBar from "../../components/dashboard/TopBar";
import {
  attendanceData,
  modifiedAttendanceSummaryData,
  myattendanceColumns,
} from "../../configs/data";
import AttendanceSummaryItem from "../../components/dashboard/AttendanceSummaryItem";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import AppBarLayout from "../../components/base/AppBarLayout";

function MyAttendance() {
  return (
    <AppBarLayout>
      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"} />
      <Box mt={14}>
        <Title
          filterButton={2}
          title={"My Attendance Summary"}
          subtitle="(January-2024)"
          buttonText={"View Attendance Report"}
        />
      </Box>

      <Box
        display={"flex"}
        sx={{
          backgroundColor: "ed",
          px: "1.7rem",
          mt: "16px",
          // width: "100%",
        }}
      >
        <Grid container spacing={2}>
          {modifiedAttendanceSummaryData.map((item) => (
            <Grid
              backgroundColor="pik"
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={item.text1}
            >
              <AttendanceSummaryItem
                text1={item?.text1}
                text2={item?.text2}
                backgroundColor={"#29AB91"}
                borderColor={"#29AB91"}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <TableLocal
          data={attendanceData}
          columns={myattendanceColumns}
          bottomHours={true}
        />
      </Box>
    </AppBarLayout>
  );
}

export default MyAttendance;
