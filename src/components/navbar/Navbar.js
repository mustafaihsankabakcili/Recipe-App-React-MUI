import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    '&.MuiPaper-root':{
      backgroundColor: '#272727'
    }
  },

  brand: {
    color: "#FFD523",
    textDecoration: "none",
    fontSize: "30px",
    fontWeight: "600",
  },

  link: {
    color: "white",
    textDecoration: "none",
    margin: "10px",
    fontWeight: "600",
    "&:hover": {
      color: "#FFD523",
    },
  },
});

export default function Navbar({ isLoggedIn, onLogout }) {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/' className={classes.brand}>
              Kitchen
            </NavLink>
          </Typography>
          <NavLink to="/" className={classes.link}>
              HOME
            </NavLink>
          {isLoggedIn && (
            <NavLink to="/recipes" className={classes.link}>
              RECIPES
            </NavLink>
          )}
          <NavLink to="/about" className={classes.link}>
            ABOUT
          </NavLink>
          <a
            href="https://github.com/mustafaihsankabakcili"
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>

          {!isLoggedIn ? (
            <NavLink to="/login" className={classes.link}>
              LOGIN
            </NavLink>
          ) : (
            <NavLink to="/" className={classes.link} onClick={onLogout}>
              LOGOUT
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
