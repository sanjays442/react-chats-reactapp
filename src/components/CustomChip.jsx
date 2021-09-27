import { Box, Typography } from "@mui/material";

const CustomChip = ({ text = "abc", Icon }) => {
   return (
      <Box
         sx={{
            display: "flex",
            border: "1px solid #c1c1c1",
            borderRadius: 100,
         }}
         style={{ padding: "4px 13px" }}
      >
         <Typography sx={{ fontSize: 14, fontWeight: 500 }} color="GrayText">
            {text}
         </Typography>

         <Box ml={1}>{Icon}</Box>
      </Box>
   );
};

export default CustomChip;
