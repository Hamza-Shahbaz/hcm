import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import {
  attendanceData,
  chatData,
  messages,
  modifiedAttendanceSummaryData,
  myattendanceColumns,
} from "../../configs/data";
import AttendanceSummaryItem from "../../components/dashboard/AttendanceSummaryItem";
import Title from "../../components/text/Title";
import TableLocal from "../../components/table/TableLocal";
import angle from "../../assets/images/angle-bottom.png";
import dots from "../../assets/images/three-dots.png";
import Search from "../../components/text/Search";
import ChatItem from "../../components/chat/ChatItem";
import Profile from "../../assets/images/profile.png";
import star from "../../assets/images/star.png";
import searchChat from "../../assets/images/search-chat.png";
import MessageItem from "../../components/chat/MessageItem";
import ChatInput from "../../components/chat/ChatInput";
import inputIcon from "../../assets/images/inputIcon.png";
import searchIconBlue from "../../assets/images/search-chat-blue.png";

function Chatting() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: isDrawerOpen
          ? `calc(100% - ${sizeConfigs.sidebar.width})`
          : "96%",
        transition: "width 0.2s ease-in-out",
        boxShadow: "unset",
        backgroundColor: "",
        color: colorConfigs.topbar.color,
        overflowX: "auto", // Hide horizontal scrollbar
        // overflowY: "clip", // Enable vertical scrollbar
        maxHeight: "100vh", //
      }}
    >
      <TopBar isTopDownVisible topdownType={"chat"} isPlusIconVisible={false} topdownMainTitle={"Messages"} IsTopBarSearchEnable={false} />
      <Box
        sx={{
          backgroundColor: "rd",
          py: 2,
        }}
      >
        <Box
          display={"flex"}
          mt={8}
          // mb={5}
          mx={3}
          sx={{
            border: "1px solid #ede9e8",
            borderRadius: 2,
            backgroundColor: "re",
            minWidth: 600,
            boxShadow: "1px 4px 5px -1px rgba(212,199,199)",
          }}
        >
          {/* -------------------- left side ------------------------ */}
          <Box
            sx={{
              backgroundColor: "ed",
              overflow: "hidden",
              borderRight: "1px solid #ede9e8",
              minWidth: 250,
            }}
            flex={isDrawerOpen ? 1 : 0.8}
          >
            <Box
              display={"flex"}
              sx={{ backgroundColor: "" }}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={4}
              py={3}
              mx={1}
              borderBottom="1px solid #ede9e8"
            >
              <Box
                display={"flex"}
                sx={{ backgroundColor: "" }}
                alignItems={"center"}
              >
                <Box backgroundColor="">
                  <Typography
                    backgroundColor=""
                    mr={1}
                    variant="h5"
                    fontWeight={"500"}
                  >
                    All Messages{" "}
                  </Typography>
                </Box>
                <Box backgroundColor="" display={"flex"}>
                  <img
                    src={angle}
                    style={{ backgroundColor: "" }}
                    width={"100%"}
                    alt=""
                  />
                </Box>
              </Box>
              <Box>
                <img src={dots} width={4.47} alt="" />
              </Box>
            </Box>
            <Box py={2} borderBottom="1px solid #ede9e8">
              <Search
                placeHolder={"Search or start a new chat"}
                isInputIconOnRight={false}
                inputIcon={searchIconBlue}
                width={12}
                height={12}
                inputHeight={40}
                inputBgColor={"#F8F9FD"}
              />
            </Box>
            <Box
              maxHeight={580}
              sx={{
                backgroundColor: "yellw",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              {chatData.map((chat, index) => (
                <ChatItem
                  key={index}
                  name={chat.name}
                  description={chat.description}
                  date={chat.date}
                  time={chat.time}
                />
              ))}
            </Box>
          </Box>

          {/* ---------------right side ------------------- */}
          <Box
            position={"relative"}
            sx={{
              backgroundColor: "rd",

              minWidth: 350,
            }}
            flex={2}
          >
            <Box
              display={"flex"}
              sx={{ backgroundColor: "" }}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={4}
              py={1.8}
              mx={1}
              borderBottom="1px solid #ede9e8"
            >
              <Box
                display={"flex"}
                sx={{ backgroundColor: "" }}
                alignItems={"center"}
              >
                <Box sx={{ backgroundColor: "" }}>
                  <img
                    src={Profile}
                    alt=""
                    style={{
                      width: 35,
                      height: 35,
                    }}
                  />
                </Box>
                <Box ml={1} sx={{ backgroundColor: "" }}>
                  <Typography
                    backgroundColor=""
                    mr={1}
                    variant="h5"
                    fontWeight={"500"}
                  >
                    David Husky
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor=""
              >
                <Box
                  sx={{
                    backgroundColor: "",
                    height: 34,
                    width: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    mx: 1,
                    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <img src={star} width={17} alt="" />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "",
                    height: 34,
                    width: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    mx: 1,
                    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <img src={searchChat} width={17} alt="" />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "",
                    height: 34,
                    width: 32,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    mx: 1,

                    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.09)",
                  }}
                >
                  <img src={dots} width={4.47} alt="" />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                maxHeight: 580,
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              {messages.map((message, index) => (
                <MessageItem
                  key={index}
                  message={message.content}
                  direction={message.direction}
                />
              ))}
            </Box>
            <Box
              position={"absolute"}
              bottom={0}
              width={"100%"}
              sx={{ backgroundColor: "white" }}
            >
              <ChatInput />
            </Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Chatting;
