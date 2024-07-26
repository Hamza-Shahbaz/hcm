import React from "react";
import { Box, Typography } from "@mui/material";
import Profile from "../../assets/images/profile.png";
import star from "../../assets/images/star.png";
import timestamp from "../../assets/images/timestamp.png";

export default function ChatItem({ name, description, date, time }) {
  return (
    <Box
      display={"flex"}
      p={2}
      sx={{
        backgroundColor: "",
        borderBottom: "1px solid #ede9e8",

        "&:hover": {
          backgroundColor: "#F8F9FD",
        },
      }}
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
      <Box mx={1} flex={1}>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ backgroundColor: "" }}
          height={35}
        >
          <Typography variant="h5">{name}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">{description}</Typography>
        </Box>
        <Box
          my={1}
          sx={{ backgroundColor: "" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Box mr={1}>
            <img src={timestamp} width={13} alt="" />
          </Box>
          <Box pr={1} borderRight={"1px solid #9FA7BE"}>
            <Typography variant="h6">{date}</Typography>
          </Box>
          <Box ml={1}>
            <Typography variant="h6">{time}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <img
          src={star}
          alt=""
          style={{
            width: 17,
            height: 17,
          }}
        />
      </Box>
    </Box>
  );
}

// export default ChatItem;
// import React from "react";
// import { AppBar, Box, Typography } from "@mui/material";
// import Profile from "../../assets/images/profile.png";
// import star from "../../assets/images/star.png";
// import timestamp from "../../assets/images/timestamp.png";

// function ChatItem() {
//   return (
//     <Box
//       display={"flex"}
//       p={2}
//       sx={{ backgroundColor: "", borderBottom: "1px solid #AFB8CF" }}
//     >
//       <Box sx={{ backgroundColor: "" }}>
//         <img
//           src={Profile}
//           alt=""
//           style={{
//             width: 35,
//             height: 35,
//           }}
//         />
//       </Box>
//       <Box mx={1} flex={1}>
//         <Box
//           display={"flex"}
//           alignItems={"center"}
//           sx={{ backgroundColor: "" }}
//           height={35}
//         >
//           <Typography variant="h5">Iva Ryan</Typography>
//         </Box>
//         <Box>
//           <Typography variant="h6">
//             Hey! Did you finish the Hi-FI wireframes for flora app design?
//           </Typography>
//         </Box>
//         <Box
//           my={1}
//           sx={{ backgroundColor: "red" }}
//           display={"flex"}
//           alignItems={"center"}
//         >
//           <Box mr={1}>
//             <img src={timestamp} width={13} alt="" />
//           </Box>
//           <Box pr={1} borderRight={"1px solid #9FA7BE"}>
//             <Typography variant="h6">Today</Typography>
//           </Box>
//           <Box ml={1}>
//             <Typography variant="h6">05:30 PM</Typography>
//           </Box>
//         </Box>
//       </Box>
//       <Box>
//         <img
//           src={star}
//           alt=""
//           style={{
//             width: 17,
//             height: 17,
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }

// export default ChatItem;
