import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Box,
  InputLabel,
  useTheme,
  Select,
  FormControl,
} from "@mui/material";
import Angle from "../../assets/images/inputangle.png";
import upload from "../../assets/images/uploadicon.png";

import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { TextareaAutosize } from "@mui/base";
import { tokens } from "../../themes/themePalette";

const MainInput = ({
  type,
  sidelabelName,
  border,
  menuItems,
  isLabelName,
  style,
  borderBottom,
  placeholderText,
}) => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [age, setAge] = useState("Single Day");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const CustomRightArrowIcon = () => (
    <IconButton>
      <AcUnitIcon />
    </IconButton>
  );

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "",
        display: "flex",
        my: 0.8,
        py: 1,
        px: 3,
        justifyContent: "space-between",
        border: border ? "1px solid #E4E7EC" : "none",
        borderBottom: borderBottom ? "1px solid #E4E7EC" : "none",
        ...style,
      }}
    >
      {isLabelName && <Box flex={2}>{sidelabelName}</Box>}

      <Box flex={4}>
        <FormControl fullWidth>
          {type === "datepicker" ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                rightArrowIcon={<CustomRightArrowIcon />}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    height: 44,
                  },
                  "& .MuiInputBase-input": {
                    textTransform: "lowercase",
                    color: "#667085",
                  },
                  "& .Mui-focused": {
                    // border: "1px solid #E4E7EC",
                    border: "1px solid #667085",
                  },
                }}
              />
            </LocalizationProvider>
          ) : type === "select" ? (
            <Select
              color="secondary"
              sx={{
                height: 44,
                borderRadius: 2,
                "& .MuiSelect-select": {
                  color: "#667085",
                },
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {menuItems?.map((value, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          ) : type === "normalInput" ? (
            <TextField
              fullWidth
              id="password"
              label={placeholderText}
              variant="outlined"
              color="secondary"
              InputLabelProps={{ style: { color: "#667085" } }}
              // sx={{ '& .MuiOutlinedInput-input': { borderColor: 'green' , color: 'purple', border: '1px solid purple'} }}
              // sx={{ '& .Mui-focused': { border: '1px solid purple'} }}
              sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 2, height: 45 },
              }}
            />
          ) : type === "textarea" ? (
            <TextField
              placeholder="Write a few sentences about Request...."
              sx={{
                borderRadius: 20,
                backgroundColor: "",
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .Mui-focused": {
                  // backgroundColor:"yellow",
                  border: "1px solid #667085",
                },
              }}
              minRows={2}
              maxRows={3}
              multiline={true}
            />
          ) : (
            <Card
              sx={{
                borderRadius: 2,
                // backgroundColor:"pink",
                boxShadow: "none",

                // borderTop: "2px solid #E4E7EC",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "",
                }}
              >
                <Box flex={1} width={64}>
                  <img src={upload} width={64} alt="" />
                </Box>

                <Box
                  sx={{
                    backgroundColor: "",
                    cursor: "pointer",
                    flex: 4,
                    borderRadius: 2,
                    py: 1,

                    border: "1px solid #E4E7EC",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload">
                    <Typography align="center" variant="subtitle1" gutterBottom>
                      Click to upload or drag and drop
                    </Typography>
                    <Typography align="center" variant="subtitle1" gutterBottom>
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </Typography>
                  </label>
                </Box>

                {/* {selectedImage && (
                  <div>
                    <Typography variant="subtitle1" gutterBottom>
                      Selected Image:
                    </Typography>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      width="200"
                    />
                  </div>
                )} */}
              </CardContent>
            </Card>
          )}
        </FormControl>
      </Box>
    </Box>
  );
};

export default MainInput;
