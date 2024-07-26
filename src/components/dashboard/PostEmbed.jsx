import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../themes/themePalette";
import { LinkedInEmbed } from "react-social-media-embed";

function PostEmbed({ borderColor }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          border: `3px solid #fff`,
          boxShadow: "5px 3px 6px 2px rgba(95, 95, 95, 0.25)",
          minHeight: '100%',
          mx: '14px'
        }}
      >
        <div style={{ display: "", justifyContent: "" }}>
          <LinkedInEmbed
            url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
            postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
            // width={325}
            height={400}
          />
        </div>
      </Box>
    </>
  );
}

export default PostEmbed;
