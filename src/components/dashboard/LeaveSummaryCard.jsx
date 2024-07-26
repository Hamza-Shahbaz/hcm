import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import FilterListIcon from "@mui/icons-material/FilterList";

const LeaveSummaryCard = () => {
  const pieData = [
    { id: 0, value: 5, color: "#008EFF" },
    { id: 1, value: 65, color: "#16C098" },
    { id: 2, value: 65, color: "#4C5CB0" },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        // backgroundColor: "#fff",
        backgroundColor: "red",
        borderRadius: "15px",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Number of Leave Remains
        </Typography>
        <FilterListIcon />
      </Box>
      <Typography variant="body2" sx={{ color: "#848D9A" }}>
        As of now August 28, 2023.
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",

          my: 2,
        }}
      >
        <PieChart
          series={[
            {
              data: pieData,
            },
          ]}
          width={200}
          height={200}
          sx={{ position: "relative", backgroundColor: "purple" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "orange",
            borderRadius: "50%",
            height: 70,
            width: 70,
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
    </Box>
  );
};

export default LeaveSummaryCard;
