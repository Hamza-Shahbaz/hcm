import {
  Box,
  Button,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import edit from "../../assets/images/edit.png";
import AddIcon from "@mui/icons-material/Add";
import filterIcon from "../../assets/images/filterIcon.png";

function Title({
  title,
  subtitle,
  buttonText,
  filterButton,
  onClick,
  bgColor,
}) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();
  return (
    <Box
      boxSizing="border-box"
      sx={{
        px: "2.5rem",
        backgroundColor: "gry",
      }}
    >
      <Grid
        container
        // spacing={isMobile ? 2 : 3}
        // alignItems={isMobile ? "flex-start" : "center"}
        // justifyContent="space-between"
        sx={{
          [theme.breakpoints.down("sm")]: {
            backgroundColor: "pik",
            // display: "flex",
            // flexWrap:"nowrap",
            fontSize: 14,
            flexDirection: "column",
            alignItems: "center",
          },
          [theme.breakpoints.down("custom")]: {
            backgroundColor: "purpe",
            display: "flex",
            flexDirection: "column",
            // flexWrap:"nowrap",
            alignItems: "center",
          },

          [theme.breakpoints.up("sm")]: {
            backgroundColor: "rd",
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: "gren",
          }}
          mt={1}
          // xs={12}
          // sm={8}
        >
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{
              fontWeight: "bold",
              [theme.breakpoints.down("sm")]: {
                fontSize: 16,
              },
              [theme.breakpoints.down("custom")]: {
                fontSize: 14,
              },
            }}
          >
            {title}
            <span style={{ fontWeight: "normal", paddingLeft: "10px" }}>
              {subtitle}
            </span>
          </Typography>
        </Grid>

        <Grid
          sx={{
            backgroundColor: "orage",
          }}
          item
          mt={1}

          // xs={12}
          // sm={4}
        >
          {filterButton === 1 ? (
            <Box>
              <img src={filterIcon} style={{ width: "35px" }} />
            </Box>
          ) : filterButton === 2 ? (
            <Button
              onClick={onClick}
              variant="contained"
              fontFamily={"Kanit-Regular"}
              size="medium"
              sx={{
                backgroundColor: bgColor || "#27988E",
                borderRadius: "4px",
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: "normal",
              }}
              endIcon={<AddIcon />}
            >
              {buttonText}
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Title;
