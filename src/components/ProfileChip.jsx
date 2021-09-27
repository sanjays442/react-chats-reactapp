import { colors, Box, Typography } from "@mui/material";

const ProfileChip = ({
   text,
   borderColor,
   backgroundColor,
   color,
   circleColor,
}) => {
   return (
      <Box
         sx={{
            display: "flex",
            borderRadius: 100,
            alignItems: "center",
            backgroundColor: backgroundColor,
            color: color,
            border: `1px solid ${borderColor}`,
         }}
         style={{ padding: "2px 8px" }}
      >
         <Box
            sx={{
               width: 12,
               height: 12,
               borderRadius: "50%",
               backgroundColor: circleColor,
               mr: 1,
            }}
         ></Box>
         <Typography sx={{ fontSize: 13, fontWeight: 500 }}>{text}</Typography>
      </Box>
   );
};

export default ProfileChip;
