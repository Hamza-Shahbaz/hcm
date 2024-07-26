import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "orange",
  },
}));

export default function BaseButton({ text, color, background, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: "16px",
        backgroundColor: background || "white",
        color: color || "black",
        py: "10px",
        px:5,
        mx: 2,
        flex: 1,
        // height: 44,
        boxShadow: "none",
        border: "1px solid #D0D5DD",
        borderRadius: 2,
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: background,
          // opacity:0.6
          color: color,
        },
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

{
  /* <BootstrapButton variant="contained" disableRipple>
        Bootstrap
      </BootstrapButton> */
}
