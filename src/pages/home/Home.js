import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import homeStyles from "./homeStyles";
import eatingOut from "../../assets/eatingOut.jpeg";

const useStyles = makeStyles(homeStyles);

const Home = ({ isLoggedIn }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Kitchen</h1>
      <img src={eatingOut} alt="eating-out" />
      <h3>
        RIGHT PLACE <span>for</span> RIGHT FOOD!
      </h3>
      {isLoggedIn ? (
        <div className={classes.bottomContainer}>
          <p>Visit our recipes page to find the right food!</p>
          <NavLink
            to="/Recipe-App-React-MUI/recipes"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.button} variant="contained">
              RECIPES PAGE
            </Button>
          </NavLink>
        </div>
      ) : (
        <div className={classes.bottomContainer}>
          <p>Login to find the right food!</p>
          <NavLink
            to="/Recipe-App-React-MUI/login"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.button} variant="contained">
              LOGIN PAGE
            </Button>
          </NavLink>
        </div>
      )}
    </Box>
  );
};

export default Home;
