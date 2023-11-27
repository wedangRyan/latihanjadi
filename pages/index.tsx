import styles from "../app/Home.module.css";
import Image from 'next/image'
import type { InferGetServerSidePropsType } from "next";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Pagethree from "./views/Pagethree";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const image = {
  height: 55,
  my: 10,
};
type Todos = {
  name: string;
  path: string;
  targets: string;
};

const cards = [1, 2, 3];

const theme = createTheme();

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 3,
            bgcolor: "#000000",
          }}
          className={styles.bg}
        >
          <ResponsiveAppBar />
          <Container maxWidth="xs" sx={{ height: 500, pt: 4 }}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="black"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="black" paragraph>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      <Box textAlign='center'>
        <Image src="/static/img/money.jpg" width={300} height={300} alt="work" />
        </Box>
      <main>
        <Container sx={{pt: 2, borderRadius: 2}} className={styles.bg2}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="black"
          gutterBottom
          sx={{ textAlign: "center" }}
          className={styles.titles}
        >
          Heading
        </Typography>
        <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={8} sx={{ pb: 40 }}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "140%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#27262C",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Container>
      </main>

      <div>
        <Pagethree />
      </div>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/ambil.json`);
  const data: Todos[] = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
