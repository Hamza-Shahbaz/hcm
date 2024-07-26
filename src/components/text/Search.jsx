import React from "react";
import search from "../../assets/images/Search.png";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Avatar } from "@mui/material";

function Search({
  placeHolder,
  width,
  height,
  inputHeight,
  leftSearchIcon,
  borderRadius,
  isInputIconOnRight,
  inputIcon,
  boxShadow,
  inputBgColor
}) {
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
    padding: isInputIconOnRight ? theme.spacing(2.6, 0) : theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: isInputIconOnRight && 0,
    backgroundColor: "",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      caretColor: "#4AB0FF",
      padding: theme.spacing(1, 1, 1, 1),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(isInputIconOnRight ? 0 : 4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      backgroundColor: "",
      // [theme.breakpoints.up("md")]: {
      //   width: "100%",
      // },
    },
  }));
  return (
    <Search
      style={{
        backgroundColor: inputBgColor || "#EBEBEB",
        borderRadius: borderRadius || "8px",
        fontFamily: "Kanit-Regular",
        boxShadow:boxShadow
      }}
    >
      {/* {leftSearchIcon && ( */}
      <SearchIconWrapper>
        <Avatar
          variant="square"
          src={inputIcon || search}
          // src={isInputIconOnRight ? inputIcon : search}
          sx={{
            width: width || 16.89,
            height: height|| 17.27,
            // width: isInputIconOnRight ? "40px" : 16.89,
            // height: isInputIconOnRight ? "40px" : 17.27,
          }}
        />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder={placeHolder || "Search…"}
        inputProps={{ "aria-label": "search" }}
        sx={{
          width: "100%",
          height: inputHeight || "31px",
        }}
      />
    </Search>
  );
}

export default Search;
