import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Search from "../text/Search";
import plus from "../../assets/images/plus.png";
import searchMagenta from "../../assets/images/search-magenta.png";

function TopdownBar({
  topdownType,
  profileAvatar,
  editIcon,
  editBtnIcon,
  boxShadow,
  topdownMainTitle,
  isPlusIconVisible,
}) {
  return (
    <Box display="flex" width={"100%"}>
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius="10px"
        marginX="60px"
        my="-60px"
        // paddingY={"10px"}
        paddingX={"15px"}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          // backgroundColor: "re",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
        }}
      >
        {topdownType === "simple" ? (
          <>
            <Box display="flex" justifyContent={"space-between"}>
              <Box
                position={"relative"}
                mx={1}
                sx={{ width: "80px", backgroundColor: "orang" }}
              >
                <img
                  src={profileAvatar}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
                <img
                  style={{
                    position: "absolute",
                    bottom: -14,
                    right: -14,
                    width: "35px",
                  }}
                  src={editIcon}
                  alt=""
                />
              </Box>
              <Box
                mx={1}
                // width={10}
                fontFamily={"Kanit-Bold"}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{ backgroundColor: "pin" }}
              >
                <Typography variant="h8">M Rameez</Typography>
                <Typography variant="h6" fontSize={16}>
                  Senior
                </Typography>
              </Box>
            </Box>
            <Box className="hidden custom:block">
              <Button
                variant="contained"
                fontFamily={"Kanit-Regular"}
                // children={edit}
                sx={{ backgroundColor: "purle", borderRadius: "12px" }}
                startIcon={
                  <img src={editBtnIcon} width={11} height={11} alt="Edit" />
                }
              >
                Edit
              </Button>
            </Box>
          </>
        ) : topdownType === "chat" ? (
          <>
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ backgroundColor: "" }}
            >
              <Box sx={{ backgroundColor: "", px: 2 }}>
                <Typography variant="h1">{topdownMainTitle}</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "",
                  display: "flex",
                  borderLeft: "1px solid black",
                  px: 2,
                }}
              >
                <Typography pr={1} color={"#3D64FD"} fontSize={14}>
                  6
                </Typography>
                <Typography fontSize={14}>Running Projects</Typography>
              </Box>
            </Box>
            <Box width={"40%"} sx={{ backgroundColor: "rd" }}>
              <Search
                placeHolder={"Search"}
                isInputIconOnRight={true}
                inputIcon={searchMagenta}
                width={50}
                height={50}
                inputHeight={40}
                boxShadow={boxShadow}
                inputBgColor="#FFFFFF"
              />
            </Box>
            {isPlusIconVisible && (
              <Box width={35} height={35} sx={{ backgroundColor: "rd" }}>
                <img
                  src={plus}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  srcset=""
                />
              </Box>
            )}
          </>
        ) : null}
      </Box>
      
    </Box>
  );
}

export default TopdownBar;
