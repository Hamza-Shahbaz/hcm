import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import emoji from "../../assets/images/emoji.png";
import mic from "../../assets/images/mic.png";
import thumb from "../../assets/images/thumb.png";
import Search from "../text/Search";
import inputIcon from "../../assets/images/inputIcon.png";

function ChatInput() {
  return (
    <Box
      sx={{ backgroundColor: "" }}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      py={2}
      px={2}
    >
      <Box
        flex={3}
        display={"flex"}
        alignItems={"center"}
        sx={{ backgroundColor: "" }}
      >
        <Box sx={{ backgroundColor: "" }}>
          <img src={emoji} alt="" width={23} />
        </Box>
        <Box flex={1} mx={2} sx={{ backgroundColor: "" }}>
          <Search
            placeHolder={"Type your message here ..."}
            height={40}
            borderRadius={24}
            isInputIconOnRight={true}
            inputIcon={inputIcon}
            inputHeight={40}
            inputBgColor={"#EFF1F8"}
          />
        </Box>
      </Box>
      <Box
        flex={1}
        sx={{ backgroundColor: "" }}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box>
          <img src={mic} alt="" width={23} />
        </Box>
        <Box>
          <img src={thumb} alt="" width={23} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChatInput;
