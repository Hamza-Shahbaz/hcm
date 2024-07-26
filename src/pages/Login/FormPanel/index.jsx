import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useTheme,
  Input
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setToken } from "../../../Store/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../../themes/themePalette";
import logo from "../../../assets/Form.png";
import sourceCodeImage from "../../../assets/logo.png";

const LoginFormPanel = () => {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const validationSchema = yup.object({
    username: yup
      .number()
      .typeError("Please enter a valid employee code")
      .required("Employee code is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const accessToken = 1; //from API for application
      reduxDispatch(setToken({ accessToken }));
      navigate("/my-attendance", { replace: true });
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "1em",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: "30vw",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          marginTop: "2em",
        }}
      >
        <img
          src={sourceCodeImage}
          alt="Source Code"
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography sx={{}} variant="h4">
        Login to start your session
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "1.3em",
        }}
      >
        <FormControl sx={{ height: "auto" }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">
            Employee Code
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            type="text"
            label="Employee Code"
            placeholder="Enter employee code"
            fullWidth
            sx={{
              borderRadius: "0.5rem",
            }}
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username ? (
            <Typography variant="body2" color="error">
              {formik.errors.username}
            </Typography>
          ) : null}
        </FormControl>
        <FormControl fullWidth variant="outlined" sx={{ height: "auto" }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="password"
            name="password"
            {...formik.getFieldProps("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            sx={{
              borderRadius: "0.5rem",
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <Typography variant="body2" color="error">
              {formik.errors.password}
            </Typography>
          ) : null}
        </FormControl>
        <Button
          type="submit"
          fullWidth
          sx={{ backgroundColor: colors.primary[500], color: "#FFFFFF" }}
          className="mx-2 my-3"
          
        >
          Log In
        </Button>
      </form>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography sx={{ fontSize: "0.8rem" }}>
        ©2024 Mega HCM. All Rights Reserved
      </Typography>
    </Box>
  );
};

export default LoginFormPanel;
