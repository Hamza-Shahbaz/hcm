import React from "react";
import { AppBar, Box, Typography, Button, Container } from "@mui/material";
import TopBar from "../../components/dashboard/TopBar";
import colorConfigs, { sizeConfigs } from "../../configs/colorConfigs";
import { useSelector } from "react-redux";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import Calendar from "../../components/calendar/Calendar";
import ViewType from "../../components/projects/ViewType";
import Search from "../../components/text/Search";
import BaseButton from "../../components/base/Button";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import TaskBox from "./TaskBox";
import TaskStatus from "../../components/projects/TaskStatus";
import TaskModal from "../../components/projects/TaskModal";
import contributor from "../../assets/images/contributor.png";

function MobileApp() {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);

  const labels = [
    { text: "#UI007", bgColor: "transparent", textColor: "black" },
    { text: "Design", bgColor: "rgba(37,99,235,.10)", textColor: "#2563EB" },
    { text: "Backlog", bgColor: "rgba(202,138,42,.10)", textColor: "#CA8A04" },
  ];
  const labels2 = [
    { text: "#UI007", bgColor: "transparent", textColor: "black" },
    {
      text: "Development",
      bgColor: "rgba(219,39,119,.10)",
      textColor: "#DB2777",
    },
    { text: "Backlog", bgColor: "rgba(202,138,42,.10)", textColor: "#CA8A04" },
  ];

  const contributors = [
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
  ];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <TopBar
        topdownType={"chat"}
        IsTopBarSearchEnable={false}
        isTopDownVisible={false}
        backgroundTexture={2}
      />
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          py: 2,
        }}
      >
        <Box
          // display={"flex"}
          mt={1}
          // mb={5}
          mx={3}
          px={2}
          sx={{
            // border: "1px solid #ede9e8",
            borderRadius: 2,
            backgroundColor: "re",
            // minWidth: 600,
            // minHeight: 600,
            // boxShadow: "1px 4px 5px -1px rgba(212,199,199)",
          }}
        >
          <Box
            // backgroundColor="#FAFAFA"
            display={"flex"}
            alignItems={"center"}
            // justifyContent={"space-between"}
            // pt={1}
          >
            <Box display={"flex"}>
              <ViewType type="board" />
              <ViewType type="list" />
              <ViewType type="limited" />
              <ViewType type="owner" />
            </Box>

            <Box sx={{ backgroundColor: "", flex: 1 }}>
              <Search
                placeHolder={"Search Tasks"}
                isInputIconOnRight={false}
                // inputIcon={searchIconBlue}
                width={17}
                height={17}
                inputHeight={40}
                inputBgColor={"#FFFFFF"}
                borderRadius={8}
                boxShadow="0px 0px 2px rgba(0, 0, 0, 0.15)"
              />
            </Box>
            <Button
              variant="contained"
              fontFamily={"Kanit-Regular"}
              size="large"
              sx={{
                backgroundColor: "#4763E4",
                borderRadius: "7px",
                color: "#fff",
                textTransform: "capitalize",
                fontWeight: "300",
              }}
              onClick={handleOpen}
              endIcon={<AddIcon />}
            >
              Add New Project
            </Button>

            {/* <BaseButton text={"Add New Project"} /> */}
          </Box>
        </Box>
      </Box>

      {/* ---------- Task Area ---------- */}

      <Container sx={{ backgroundColor: "gren" }} maxWidth="xl">
        <Box
          sx={{ backgroundColor: "#F4F4F4" }}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" },
              // mb: 2,
              py: 3,
              backgroundColor: "lightble",
              height: "100vh",
              borderRadius: "8px",
            }}
          >
            <TaskStatus
              title={"Backlog Tasks"}
              color={"rgba(219, 39, 119, 1)"}
              bgColor={"rgba(219, 39, 119, .1)"}
            />
            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Model Answer"
              isContributorVisible
            />
            <TaskBox
              labels={labels2}
              contributors={contributors}
              title="Create calendar, chat and email app pages"
              isContributorVisible
            />
            <TaskBox addTask />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" },
              // mb: 2,
              py: 3,
              backgroundColor: "lightgren",
              height: "100px",
              borderRadius: "8px",
            }}
          >
            <TaskStatus title={"To Do Tasks"} />

            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Model Answer"
              isContributorVisible
            />
            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Add authentication pages"
            />
            <TaskBox addTask />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" },
              // mb: 2,
              py: 3,
              backgroundColor: "lightcral",
              height: "100px", // Adjust as needed
              borderRadius: "8px",
            }}
          >
            <TaskStatus
              title={"In Process"}
              color={"rgba(219, 39, 119, 1)"}
              bgColor={"rgba(219, 39, 119, .1)"}
            />

            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Model Answer"
              isContributorVisible
            />
            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Model Answer"
            />
            <TaskBox addTask />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" },
              // mb: 2,
              py: 3,
              backgroundColor: "lightgolenrodyellow",
              height: "100px", // Adjust as needed
              borderRadius: "8px",
            }}
          >
            <TaskStatus title={"Done"} />
            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Model Answer"
            />
            <TaskBox
              labels={labels}
              contributors={contributors}
              title="Product Design, Figma, Sketch (Software), Prototype"
              isContributorVisible
            />
            <TaskBox addTask />
          </Box>
        </Box>
      </Container>

      <TaskModal open={open} handleClose={handleClose} />
    </AppBar>
  );
}

export default MobileApp;
