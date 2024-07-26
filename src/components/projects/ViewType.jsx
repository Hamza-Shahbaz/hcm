import React from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import boardView from "../../assets/images/board-view.png";
import listView from "../../assets/images/list-view.png";

function ViewType({ type }) {
  let icon;
  let label;
  let borderRadius;
  let border;
  let borderSpecific;
  let boxShadow;

  switch (type) {
    case "board":
      icon = <img src={boardView} height={15} width={15} />;
      label = "Board View";
      borderRadius = "8px 0px 0px 8px";
      border = "1px solid #EBEEF2";
      boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
      break;
    case "list":
      icon = <img src={listView} height={15} width={15} />;
      label = "List View";
      borderRadius = "0px 8px 8px 0px";
      border = "1px solid #EBEEF2";
      boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
      break;
    case "limited":
      icon = <LockIcon sx={{ fontSize: 20, color: "#A0AEC0" }} />;
      borderRadius = null;
      boxShadow = null;
      borderSpecific = {
        borderTop: "0px solid #DDE1E8",
        borderBottom: "0px solid #DDE1E8",
        borderLeft: "1px solid #DDE1E8",
        borderRight: "1px solid #DDE1E8",
      };
      label = (
        <>
          Limited Access
          <ArrowDropDownIcon sx={{ fontSize: 20, color: "#A0AEC0", ml: 1 }} />
        </>
      );
      break;
    default:
      icon = null;
      label = "Owners";
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      padding="8px 16px"
      bgcolor="white"
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      mx={type === "limited" ? 1 : 0}
      border={border}
      {...borderSpecific}
      sx={{
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        },
        // marginRight: type === "limited" ? 0 : 2,
        backgroundColor: "#FAFAFA",
      }}
    >
      {icon}
      <Typography
        variant="body1"
        sx={{ ml: 1, fontWeight: "500", color: "#4A5568" }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default ViewType;
