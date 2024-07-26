import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LabelBox = ({ labels }) => {
  return (
    <Box backgroundColor="gren" mt={1} display="flex">
      {labels.map((label, index) => (
        <Box
          key={index}
          borderRadius={3}
          mr={1}
          p={0.5}
          border={label.text.indexOf("#") !== -1 && "1px solid #E9ECF1"}
          sx={{ backgroundColor: label.bgColor }}
        >
          <Typography color={label.textColor} fontSize={8}>
            {label.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default LabelBox;
