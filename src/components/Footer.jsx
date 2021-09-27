import { Box, Typography, colors } from "@mui/material";
import ProfileChip from "./ProfileChip";

const Footer = () => {
   return (
      <Box p={1}>
         <Box>
            <Box sx={{ display: "flex", my: 2 }}>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                     sx={{ fontSize: 16, fontWeight: 500 }}
                     color="GrayText"
                  >
                     Profile de risque
                  </Typography>

                  <Box ml={2} sx={{ display: "flex" }}>
                     <Box>
                        <ProfileChip
                           text="Profile 1"
                           borderColor={colors.green[700]}
                           backgroundColor={colors.green[50]}
                           circleColor={colors.green[500]}
                           color={colors.green[500]}
                        />
                     </Box>

                     <Box ml={2}>
                        <ProfileChip
                           text="Profile 1"
                           borderColor={colors.orange[700]}
                           backgroundColor={colors.orange[50]}
                           circleColor={colors.orange[500]}
                           color={colors.orange[500]}
                        />
                     </Box>

                     <Box ml={2}>
                        <ProfileChip
                           text="Profile 1"
                           borderColor={colors.blue[700]}
                           backgroundColor={colors.blue[50]}
                           circleColor={colors.blue[500]}
                           color={colors.blue[500]}
                        />
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default Footer;
