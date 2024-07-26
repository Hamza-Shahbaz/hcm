import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import backgroundImage from "../../assets/backgroundImage.jpeg";
import leftPic from "../../assets/hr.png";
import { tokens } from "../../themes/themePalette";
import LoginFormPanel from "./FormPanel";
import Sidebar from "./FormPanel/Sidebar";

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonIpad = !useMediaQuery("(min-height:1000px)");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          height: !isNonMobile ? "150vh" : "100vh",
          width: "100vw",
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.16, // Adjust opacity as needed
          // backgroundSize: "cover", // Cover the entire container
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: !isNonMobile ? "column" : "row",
          justifyContent: !isNonMobile ? "space-between" : "space-between",
          alignItems: !isNonMobile ? "center" : isNonIpad? "" : "center",
          padding: !isNonMobile ? "2rem 0" : "16vh 0rem 2vh 0rem" ,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: !isNonMobile ? "" : "8vw",
            justifyContent: "center",
            alignItems: "center",
            height: !isNonMobile ? "50vh" : "70vh",
            width: !isNonMobile ? "80vw" : "35vw",
          }}
        >
          <Box
            sx={{
              width: isNonMobile ? "30vw" : "70vw",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              minHeight:'20vh'
            }}
          >
            <img
              src={leftPic}
              alt="Source Code"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "600" }}>The Ultimate </Typography>
            <Typography variant="h4" sx={{ color: colors.primary[500], fontWeight: "600" }}>
              HR Management Solution
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h4">
              At SourceCode, we have a reliable, secure and adaptable HR
              management built from the ground up.We are determined to help our
              employees to give their best efforts every day to achieve the
              goals of their job.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: "transparent 0.2rem solid",
            marginRight: !isNonMobile ? "" : "7vw",
            borderRadius: "2rem",
            width: !isNonMobile ? "80vw" : "35vw",
            background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #4ea9aa, #eaf0f7) border-box`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            marginTop: !isNonMobile ? "4rem" : isNonIpad ?  "-10vh" : "",
            height: "85vh",
            maxHeight : '700px'
          }}
        >
          <LoginFormPanel />
        </Box>
      </Box>


    <Sidebar/>

    </>

  );
};

export default Login;
