import { Box, colors, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import CustomChip from "./CustomChip";

const Header = () => {
   return (
      <Box p={1}>
         <Box>
            <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
               <span style={{ color: colors.grey[600] }}>
                  Et si j'avais commernce
               </span>{" "}
               <strong>ily a 5 ans ?</strong>
            </Typography>

            <Box sx={{ display: "flex", my: 2 }}>
               <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                     sx={{ fontSize: 14, fontWeight: 500 }}
                     color="GrayText"
                  >
                     Avec un
                  </Typography>

                  <Box ml={2}>
                     <CustomChip
                        text="Depot initial"
                        Icon={
                           <EuroIcon
                              style={{ color: "#32a852", fontSize: 16 }}
                           />
                        }
                     />
                  </Box>
               </Box>

               <Box sx={{ display: "flex", ml: 3, alignItems: "center" }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                     et une
                  </Typography>

                  <Box ml={2}>
                     <CustomChip
                        text="Mensualite"
                        Icon={
                           <EuroIcon
                              style={{ color: "#32a852", fontSize: 16 }}
                           />
                        }
                     />
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default Header;
