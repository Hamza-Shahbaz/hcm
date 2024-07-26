import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../../configs/colorConfigs";
import { tokens } from "../../../themes/themePalette";
import { useTheme } from "@mui/material/styles";

const SidebarItem = ({ item }) => {
  //   const { appState } = useSelector((state) => state.appState);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        "&:hover": {
          backgroundColor: colors.primary[400],
        },
        //   backgroundColor: appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>

      <ListItemText
        primary={
          <Typography style={{ fontSize: "17px" }}>
            {item.sidebarProps.displayText}
          </Typography>
        }
      />
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
