// import React from "react";
// import { Box, Typography, Avatar } from "@mui/material";
// import contributor from "../../assets/images/contributor.png";

// function ProjectContributors() {
//   return (
//     <Box display={"flex"} backgroundColor="pin">
//       <Avatar variant="square" src={contributor} height={40} width={40} />
//       <Avatar
//         sx={{ ml: -1 }}
//         variant="square"
//         src={contributor}
//         height={40}
//         width={40}
//       />
//       <Avatar
//         sx={{ ml: -1 }}
//         variant="square"
//         src={contributor}
//         height={40}
//         width={40}
//       />
//       <Avatar
//         sx={{ ml: -1 }}
//         variant="square"
//         src={contributor}
//         height={40}
//         width={40}
//       />
//       <Box
//         border={"1px solid white"}
//         backgroundColor="pink"
//         height={40}
//         width={40}
//         ml={-1}
//         zIndex={1}
//         borderRadius={"50%"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         +2
//       </Box>
//     </Box>
//   );
// }

// export default ProjectContributors;

import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

function ProjectContributors({
  totalSeenContributors,
  contributors,
  height,
  width,
}) {
  const maxVisibleContributors = totalSeenContributors || 4;
  const visibleContributors = contributors.slice(0, maxVisibleContributors);
  const additionalContributors = contributors.length - maxVisibleContributors;

  return (
    <Box display="flex">
      {visibleContributors.map((contributor, index) => (
        <Avatar
          key={contributor.id}
          variant="square"
          src={contributor.image}
          sx={{
            height: height || 40,
            width: width || 40,
            ...(index !== 0 && { ml: -1 }),
          }}
        />
      ))}
      {additionalContributors > 0 && (
        <Box
          border="1px solid white"
          backgroundColor={totalSeenContributors ? "#F2F4F7" : "pink"}
          height={height || 40}
          width={width || 40}
          ml={-1}
          zIndex={1}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color={totalSeenContributors ? "#606C80" : "#D25B68"}
        >
          {`+${additionalContributors}`}
        </Box>
      )}
    </Box>
  );
}

export default ProjectContributors;
