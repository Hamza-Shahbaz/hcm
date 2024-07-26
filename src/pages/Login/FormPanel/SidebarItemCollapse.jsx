import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SidebarItem from "./SidebarItem";
import colorConfigs from "../../../configs/colorConfigs";
import { tokens } from "../../../themes/themePalette";
import { useTheme } from "@mui/material/styles";

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);

  //   const { appState } = useSelector((state) => state.appState);

  //   useEffect(() => {
  //     if (appState.includes(item.state)) {
  //       setOpen(true);
  //     }
  //   }, [appState, item]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": {
            backgroundColor: colors.primary[400],
          },
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
          disableTypography
          primary={<Typography style={{ fontSize: "17px" }}>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map((route, index) =>
            route.sidebarProps ? (
              route.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              )
            ) : null
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
