import React from "react";
import {
  Box,
  Typography,
  useTheme,
  CircularProgress,
  Grid,
} from "@mui/material";
import icon1 from "../../assets/images/AttendanceSummaryIcon.png";
import { tokens } from "../../themes/themePalette";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex", color: "orange" }}>
      <CircularProgress
        variant="determinate"
        value={props.value}
        sx={{ color: "#fff" }}
        size={80}
        thickness={3.5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          color="#fff"
          sx={{ paddingLeft: "4px" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function AttendanceSummaryItem({
  text1,
  text2,
  text3,
  value,
  backgroundColor,
  borderColor,
  isType,
  isProgressbarShown,
  type,
  variant,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const sizes = {};

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: backgroundColor || "green",
        // m: "10px",
        borderRadius: "15px",
        border: `3px solid ${borderColor}`,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid sx={{ backgroundColor: "re" }} item xs={8} sm={7} md={8} lg={8}>
          <Typography
            variant="h7"
            sx={{
              fontWeight: 500,
              color: "#fff",
              // fontSize: {
              //   xs: theme.typography.pxToRem(14),
              //   sm: theme.typography.pxToRem(16),
              //   md: theme.typography.pxToRem(18),
              //   lg: theme.typography.pxToRem(20),
              // },
            }}
          >
            {text1}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "normal",
              color: "#fff",
              pt: "7px",
              // fontSize: {
              //   xs: theme.typography.pxToRem(24),
              //   sm: theme.typography.pxToRem(32),
              //   md: theme.typography.pxToRem(40),
              //   lg: theme.typography.pxToRem(48),
              // },
            }}
          >
            {text2}
          </Typography>

          {isType && (
            <Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
              <Box>
                <img src={icon1} alt="icon" style={{ width: "30px" }} />
              </Box>
              <Box sx={{ pl: "10px", pb: "5px" }}>
                <Typography variant="h8" sx={{ fontWeight: "", color: "#fff" }}>
                  {text3}
                </Typography>
              </Box>
            </Box>
          )}
        </Grid>

        {isProgressbarShown && (
          <Grid
            sx={{ backgroundColor: "yelow" }}
            item
            xs={4}
            sm={5}
            md={4}
            lg={4}
            // md={6}
            // sx={{ display: "flex", justifyContent: "center" }}
          >
            <CircularProgressWithLabel value={value} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default AttendanceSummaryItem;
