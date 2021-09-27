import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box, Grid, Card, CardContent, CardActions } from "@mui/material";
import Chart from "../../components/Chart";

const Home = () => {
   return (
      <Box
         sx={{
            background: "whitesmoke",
            height: "100vh",
         }}
      >
         <Grid container justifyContent="center">
            <Grid item lg={6} md={8} xs={11}>
               <Card
                  sx={{
                     minWidth: 275,
                     mt: 15,
                     p: 1,
                  }}
               >
                  <CardContent sx={{ minHeight: "50vh" }}>
                     <Header />

                     <Box mt={2}>
                        <Chart />
                     </Box>
                  </CardContent>
                  <CardActions>
                     <Footer />
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Home;
