import React from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  Avatar,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddIcon from "@mui/icons-material/Add";

import cross from "../../assets/images/close.png";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import tag from "../../assets/images/Tags.png";
import person from "../../assets/images/Person.png";
import ok from "../../assets/images/Ok.png";
import user from "../../assets/images/male-user.png";
import calendar from "../../assets/images/Calendar.png";
import ellipseAvatar from "../../assets/images/ellipse-avatar.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 836,
  // height: 673,
  // bgcolor: "background.paper",
  boxShadow: 24,
  pl: 3,
  pr: 2,
  py: 2,
  borderRadius: 3,
  backgroundColor: "ed",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Section = styled(Box)({
  marginTop: 2,
  marginBottom: 2,
});

const Attachments = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: 1,
  marginBottom: 1,
});

const Description = styled(Box)({
  // backgroundColor: "#f9f9f9",
  padding: "10px",
  borderRadius: "5px",
  // marginTop: "10px",
});

const DetailsBox = styled(Box)({
  display: "flex",
  width: 350,
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
  backgroundColor: "oange",
});

const LabelBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
});

const StyledChip = styled(Chip)({
  height: 24,
  fontSize: "0.75rem",
});

const ModalContent = ({ handleClose }) => {
  return (
    <Paper sx={style}>
      <Header>
        <Typography fontWeight={400} variant="h7">
          Project / Task ID-1234
        </Typography>
        <img
          src={cross}
          style={{ cursor: "pointer" }}
          onClick={handleClose}
          alt=""
          width={20}
          srcset=""
        />
      </Header>

      <Section>
        <Typography my={1} fontWeight={500} fontSize={20}>
          Make a Suitable form
        </Typography>
      </Section>

      <Paper sx={{ padding: 0, backgroundColor: "pik", boxShadow: "none" }}>
        <DetailsBox sx={{ backgroundColor: "re", my: 2 }}>
          {/* <PriorityHighIcon style={{ marginRight: 8 }} /> */}
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "ed" }}
          >
            <Box display={"flex"} sx={{ backgroundColor: "yelow", mr: 3 }}>
              <img src={tag} width={22.37} alt="" srcset="" />
            </Box>
            <Box>
              <Typography
                variant="h7"
                mr={0}
                style={{ width: 80, backgroundColor: "ye" }}
              >
                Priority
              </Typography>
            </Box>
          </Box>

          <Box flex={1}>
            <StyledChip
              sx={{ px: 2, fontSize: 14 }}
              label="High"
              color="error"
            />
          </Box>
        </DetailsBox>

        <DetailsBox sx={{ backgroundColor: "rd", my: 2 }}>
          {/* <CheckCircleIcon style={{ marginRight: 8 }} /> */}
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "re" }}
          >
            <Box display={"flex"} mr={0} sx={{ mr: 3 }}>
              <img src={ok} width={22.37} alt="" srcset="" />
            </Box>
            <Box>
              <Typography variant="h7">Status</Typography>
            </Box>
          </Box>
          <Box flex={1}>
            <StyledChip
              sx={{ fontSize: 14 }}
              label="Completed"
              color="success"
            />
          </Box>
        </DetailsBox>

        <DetailsBox sx={{ backgroundColor: "re", my: 2 }}>
          {/* <PersonIcon style={{ marginRight: 8 }} /> */}
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "gren" }}
          >
            <Box display={"flex"} flex={1}>
              <Box display={"flex"} sx={{ mr: 3 }}>
                <img src={person} width={22.37} alt="" srcset="" />
              </Box>
              <Box>
                <Typography variant="h7">Owner</Typography>
              </Box>
            </Box>

            <Box
              flex={1}
              display={"flex"}
              alignItems={"center"}
              sx={{ backgroundColor: "yello" }}
            >
              <Avatar
                alt="Hasnain"
                src={ellipseAvatar}
                style={{ marginRight: 8 }}
              />
              <Typography variant="h7">Hasnain</Typography>
            </Box>
          </Box>
        </DetailsBox>

        <DetailsBox sx={{ backgroundColor: "re", my: 2 }}>
          {/* <PersonIcon style={{ marginRight: 8 }} /> */}

          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "yellw" }}
          >
            <Box display={"flex"} flex={1}>
              <Box sx={{ mr: 3 }}>
                <img src={user} width={22.37} alt="" srcset="" />
              </Box>
              <Box display={"flex"} sx={{ backgroundColor: "gren" }}>
                <Typography variant="h7">Assignee</Typography>
              </Box>
            </Box>

            <Box flex={1} display={"flex"} alignItems={"center"}>
              <Avatar
                alt="Hasnain"
                src={ellipseAvatar}
                style={{ marginRight: 8 }}
              />
              <Typography variant="h7">Hasnain</Typography>
            </Box>
          </Box>
        </DetailsBox>

        <DetailsBox sx={{ backgroundColor: "re", my: 2 }}>
          {/* <CalendarTodayIcon style={{ marginRight: 8 }} /> */}
          <Box
            flex={1}
            display={"flex"}
            alignItems={"center"}
            sx={{ backgroundColor: "yelow" }}
          >
            <Box display={"flex"} flex={1}>
              <Box display={"flex"} sx={{ mr: 3, backgroundColor: "pnk" }}>
                <img src={calendar} width={22.37} alt="" srcset="" />
              </Box>
              <Box>
                <Typography variant="h7" style={{ width: 80 }}>
                  Due Date
                </Typography>
              </Box>
            </Box>
            <Box flex={1}>
              <Typography variant="h5">March 24th 2023</Typography>
            </Box>
          </Box>
        </DetailsBox>
      </Paper>

      <Divider />

      <Box py={2}>
        <Box>
          <Typography fontWeight={"500"} variant="h7">
            Attachments
          </Typography>
        </Box>
        <Box>
          <Attachments>
            <AttachFileIcon />
            <Typography
              variant="h7"
              color={"#0974C6"}
              style={{ marginLeft: 4 }}
            >
              Document Links
            </Typography>
          </Attachments>
          <Attachments sx={{ mt: 1 }}>
            <AddIcon />
            <Typography variant="h7" style={{ marginLeft: 4 }}>
              Add Attachment
            </Typography>
          </Attachments>
        </Box>
      </Box>

      <Divider />

      <Description>
        <Typography fontWeight={"500"} variant="h7">
          Descripton
        </Typography>
        <Typography variant="h5">
          Lörem ipsum salig nen, ip-tv plus labesa. Eurov vk. Funktionell dumhet
          sabel som antiras mide. Heteron bionebelt pressing, divis peng. Trer
          beroren.
        </Typography>
      </Description>
      <Divider />

      <Box backgroundColor={"yllow"} mt={2} display="flex" alignItems="center">
        {/* <Avatar src="/broken-image.jpg" /> */}

        <Box>
          <Avatar
            alt="Hasnain"
            src={ellipseAvatar}
            style={{ marginRight: 12 }}
          />
        </Box>
        <Box
          boxShadow={"1px 4px 5px -1px rgba(212,199,199)"}
          flex={1}
          px={1}
          py={2}
          sx={{ backgroundColor: "#F3F4F6" }}
          borderRadius={2}
        >
          <Typography>Add Attachment</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const TaskModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent handleClose={handleClose} />
    </Modal>
  );
};

export default TaskModal;
