import React from "react";
import { Grid } from "@mui/material";
import AttendanceSummary from "../../components/dashboard/AttendanceSummary";
import ActivityCard from "../../components/dashboard/ActivityCard";
import EventCard from "../../components/dashboard/EventCard";
import PostEmbed from "../../components/dashboard/PostEmbed";
import AppBarLayout from "../../components/base/AppBarLayout";
import { attendanceSummaryData } from "../../configs/data";
import TopBar from "../../components/dashboard/TopBar";

const Dashboard = () => {
  return (
    <AppBarLayout>
      <TopBar isTopDownVisible IsTopBarSearchEnable topdownType={"simple"} />

      <AttendanceSummary data={attendanceSummaryData} />
      <Grid container spacing={0} my={"15px"} sx={{ px: "25px" }}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ActivityCard
            isItemShown={1}
            headingName={"Number of Leave Remains"}
            heading2_Shown={true}
            iconShown={true}
            pieChartShown={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <EventCard headingName={"Announcement"} type={1} iconShown={true} />
        </Grid>
      </Grid>

      <Grid container spacing={0} my={"15px"} sx={{ px: "25px" }}>
        <Grid item xs={12} xl={5} lg={4} md={7}>
          <ActivityCard
            isItemShown={3}
            headingName={"Reporting Authorities"}
            heading2_Shown={false}
            iconShown={false}
            pieChartShown={false}
          />
        </Grid>
        <Grid item xs={12} xl={7} lg={8} md={5}>
          <EventCard headingName={"Certifications"} type={2} />
        </Grid>
      </Grid>

      <Grid container spacing={0} my={"15px"} sx={{ px: "25px" }}>
        <Grid item xs={12} xl={6} lg={4} md={7}>
          <PostEmbed />
        </Grid>
        <Grid item xs={12} xl={6} lg={8} md={5}>
          <PostEmbed />
        </Grid>
      </Grid>

      <Grid container spacing={0} my={"30px"} sx={{ px: "25px" }}>
        <Grid item xs={12} xl={4} lg={4} md={7}>
          <ActivityCard
            isItemShown={2}
            headingName={"Recent Added Jobs"}
            heading2_Shown={false}
            iconShown={false}
            pieChartShown={false}
            isCalender={true}
          />
        </Grid>
        <Grid item xs={12} xl={8} lg={8} md={5}>
          <EventCard
            headingName={"Meetings and Interview"}
            type={2}
            iconShown={true}
            isCalender={true}
          />
        </Grid>
      </Grid>
    </AppBarLayout>
  );
};

export default Dashboard;
