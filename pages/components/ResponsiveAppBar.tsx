import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Head from "next/head";
import { useRouter } from "next/router";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "info.main",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const pages = [
  { id: 0,name: "Home", path: "/" },
  {
    id: 1,
    name: "SALES COMPENSATION",
    path: "/sales_compensation.pdf",
    targets: "_blank",
  },
  {
    id: 2,
    name: "REGISTER",
    path: "/register",
  },
  {
    id: 3,
    name: "SWAP",
    path: "/swap",
  },
  {
    id: 4,
    name: "MATRIX TURNOVER",
    path: "/matrix",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const logins = [
  { id: 0,name: "Metamask", path: "/static/img/metamask.png" },
  {
    id: 1,
    name: "Trust Wallet",
    path: "/static/img/trustwallet.png",
  },
  {
    id: 2,
    name: "REGISTER",
    path: "/static/img/metamask.png",
  },
  {
    id: 3,
    name: "SWAP",
    path: "/static/img/metamask.png",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const site = "http://localhost:3000";
  const canonicalURL = site + useRouter().pathname;
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Head>
        <title>{useRouter().pathname}</title>
        <link rel="canonical" href={canonicalURL} />
      </Head>
      <Container maxWidth="lg" sx={{ borderBottom: 3, borderColor: "#177DD0" }}>
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            flexGrow="1"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Array.from(pages).map((page, index) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link href={page.path} target={page.targets}>
                    <Typography
                      textAlign="center"
                      sx={{ color: "black", fontWeight: "bold" }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Array.from(pages).map((page, index) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: "auto",
                  m: 2,
                  my: 2,
                  color: "black",
                  display: "block",
                }}
              >
                <Link href={page.path} target={page.targets}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid container rowSpacing={0} spacing={0}>
                  {Array.from(logins).map((login, index) => (
                    <Grid xs={6} key={login.id}>
                      <Link href={"/"}>
                        <Item
                          sx={{ borderRadius: "0", border: 1, height: 140 }}
                        >
                          <Img src={login.path} />
                        </Item>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Modal>
          </Box>
        </Toolbar>
      </Container>
    </>
  );
}
export default ResponsiveAppBar;
