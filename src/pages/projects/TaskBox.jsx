import React from "react";
import { Box, Typography, Button } from "@mui/material";
import dotsHorizontal from "../../assets/images/dots-horizontal.png";
import tickNote from "../../assets/images/tick-note.png";
import ProjectContributors from "../../components/projects/ProjectContributors";
import AddContributor from "../../assets/images/add-contributor.png";
import MiniMessage from "../../assets/images/mini-message.png";
import AttachIcon from "../../assets/images/attachment.png";
import AddTask from "../../assets/images/addtask.png";
import LabelBox from "../../components/projects/LabelBox";

function TaskBox({
  title,
  labels,
  contributors,
  isContributorVisible,
  addTask,
}) {
  return (
    <Box my={2} sx={{ backgroundColor: "gren" }}>
      {addTask ? (
        <Box
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.15)"
          py={1}
          px={1}
          borderRadius={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#FFFFFF",
            "&: hover": {
              backgroundColor: "#FFFBFB",
              cursor: "pointer",
            },
          }}
        >
          <img src={AddTask} width={16.67} alt="" srcset="" />
        </Box>
      ) : (
        <Box
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.15)"
          p={2}
          borderRadius={2}
          sx={{
            backgroundColor: "#FFFFFF",

            "&: hover": {
              backgroundColor: "#FFFBFB",
              cursor: "pointer",
            },
          }}
        >
          <Box
            backgroundColor="gree"
            display={"flex"}
            alignItems={"flex-start"}
          >
            <Box backgroundColor="pik" flex={3}>
              <Typography fontWeight={"400"} variant="h5">
                {title}
              </Typography>
            </Box>
            <Box
              backgroundColor="yelow"
              display={"flex"}
              justifyContent={"flex-end"}
              // alignItems={"flex-start"}
              flex={1}
            >
              <Box pr={1} display={"flex"}>
                <img
                  style={{ backgroundColor: "rd" }}
                  src={tickNote}
                  width={13.33}
                  height={16.67}
                  alt=""
                />
              </Box>
              <Box backgroundColor={"gren"}>
                <Typography fontSize={10} fontWeight={"bold"} color={"#17A5E6"}>
                  4
                </Typography>
              </Box>
            </Box>
          </Box>
          <LabelBox labels={labels} />

          {isContributorVisible && (
            <Box sx={{ backgroundColor: "rd" }} display={"flex"}>
              <Box
                flex={1}
                sx={{ backgroundColor: "gren" }}
                mt={1.5}
                display={"flex"}
                alignItems={"center"}
              >
                <Box backgroundColor="re" flex={2} display={"flex"}>
                  <ProjectContributors
                    width={32}
                    height={32}
                    contributors={contributors}
                    totalSeenContributors={2}
                  />
                  <Box ml={1}>
                    <img src={AddContributor} width={32} alt="" />
                  </Box>
                </Box>
                <Box
                  flex={0.5}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ backgroundColor: "yellowreen" }}
                >
                  <Box>
                    <img src={AttachIcon} width={13.33} alt="" />
                  </Box>
                  <Box ml={1}>
                    <Typography fontWeight={"bold"} color={"#A855F7"}>
                      2
                    </Typography>
                  </Box>
                  <Box ml={1}>
                    <img src={MiniMessage} width={13.33} alt="" />
                  </Box>
                  <Box ml={1}>
                    <Typography fontWeight={"bold"} color={"rgba(234, 179, 8)"}>
                      3
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default TaskBox;
