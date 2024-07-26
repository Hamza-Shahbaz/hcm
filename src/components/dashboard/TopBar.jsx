import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { tokens } from "../../themes/themePalette";
import { Avatar, Button } from "@mui/material";
import pencil from "../../assets/images/pencil.png";
import boyAvatar from "../../assets/images/boy-avatar.png";
import message from "../../assets/images/message.png";
import notification from "../../assets/images/notification.png";
import search from "../../assets/images/Search.png";
import bottomAngle from "../../assets/images/angle-bottom.png";
import background from "../../assets/images/Background.png";
import background2 from "../../assets/images/Background2.png";
import Profile from "../../assets/images/profile.png";
import plusOp from "../../assets/images/plus-op.png";
import edit from "../../assets/images/edit.png";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TopdownBar from "../base/TopdownBar";
import ProjectContributors from "../projects/ProjectContributors";
import contributor from "../../assets/images/contributor.png";
import { handleDrawerClose } from "../../Store/Drawer/DrawerSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar({
  topdownType,
  IsTopBarSearchEnable,
  topdownMainTitle,
  isPlusIconVisible,
  isTopDownVisible,
  backgroundTexture,
}) {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const contributors = [
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
    { id: 1, image: contributor },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ flexGrow: 1 }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "",
          boxShadow: "none",
          borderBottom: "1px solid #E9EAEC",
        }}
      >
        <Toolbar>
          <Box className="custom2:hidden">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => {
                dispatch(handleDrawerClose(!isDrawerOpen));
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {IsTopBarSearchEnable && (
            <Search
              style={{
                backgroundColor: "#EBEBEB",
                borderRadius: "8px",
                fontFamily: "Kanit-Regular",
              }}
            >
              <SearchIconWrapper>
                <Avatar
                  variant="square"
                  src={search}
                  sx={{ width: 16.89, height: 17.27 }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: "320px",
                  height: "31px",
                }}
              />
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ margin: "0px 8px" }}
            >
              <Badge badgeContent={4} color="error">
                <Avatar
                  variant="square"
                  src={notification}
                  sx={{ width: 24, height: 20 }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ margin: "0px 8px" }}
            >
              <Badge badgeContent={17} color="error">
                <Avatar
                  variant="square"
                  src={message}
                  sx={{ width: 20, height: 16 }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              sx={{ margin: "0px 8px" }}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="Remy Sharp"
                src={boyAvatar}
                sx={{ width: 32, height: 32 }}
              />
              <Avatar
                alt="Remy Sharp"
                src={bottomAngle}
                sx={{ width: 10, height: 7, marginLeft: "8px" }}
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        // width={"100%"}
        // position={"absolute"}

        // height={500}
        // margin={"-100px 0px"}
        zIndex={-1}
        sx={{
          padding: "0px 24px",
          // backgroundColor: colors.primary[1000],
          backgroundColor: "rd",
          position: "relative",
          // display: "flex",
          // borderRadius: "10px 10px",
        }}
      >
        {backgroundTexture === 2 && (
          <Box
            flex={1}
            backgroundColor="yello"
            position={"absolute"}
            bottom={0}
            left={0}
            mx={6}
            mb={4}
            right={0}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography color={"white"} variant="h2">
                Mobile App Design
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Box display={"flex"} alignItems={"center"} mx={2}>
                <Box
                  sx={{
                    backgroundColor: "rd",
                    display: "flex",
                    mr: 2,
                  }}
                >
                  <img
                    src={plusOp}
                    width={30}
                    height={30}
                    style={{ backgroundColor: "geen" }}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "re",
                  }}
                >
                  <Typography color="white" variant="h4">
                    Invite
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ProjectContributors contributors={contributors} />
              </Box>
            </Box>
          </Box>
        )}
        <img
          src={backgroundTexture === 2 ? background2 : background}
          alt="Source Code"
          style={{
            // height: "0vh",
            width: "100%",
            // objectFit:"cover"
          }}
        />
      </Box>
      {isTopDownVisible && (
        <TopdownBar
          profileAvatar={Profile}
          editIcon={pencil}
          editBtnIcon={edit}
          topdownType={topdownType}
          topdownMainTitle={topdownMainTitle}
          boxShadow="0px 4px 16px 0px rgba(0, 0, 0, 0.09)"
          isPlusIconVisible={isPlusIconVisible}
        />
      )}
    </Box>
  );
}
