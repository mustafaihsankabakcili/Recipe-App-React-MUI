import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

import eatingOut from "../../assets/eatingOut.jpeg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: '100vh',
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    '&.MuiBox-root': {
      backgroundColor: '#3A4750'
    },

    "& img": {
      width: "1000px",
      borderRadius: "30px",
      margin: "50px",
    },

    "& h1": {
      color: "#FFD523",
      fontSize: "50px",
    },

    "& h3": {
      color: "#FFD523",
      fontSize: "30px",
      marginBottom: "30px",

      "& span": {
        fontSize: "25px",
      },
    },
  },

  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",

    "& button": {
      width: "150px",
      "&.MuiButton-root": {
        backgroundColor: "#FFD523",
        color: "#272727",
        fontSize: "15px",
      },
    },
  },
});

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
          <NavLink to="/Recipe-App-React-MUI/recipes" style={{ textDecoration: "none" }}>
            <Button
              className={classes.button}
              variant="contained"
            >
              RECIPES PAGE
            </Button>
          </NavLink>
        </div>
      ) : (
        <div className={classes.bottomContainer}>
          <p>Login to find the right food!</p>
          <NavLink to="/Recipe-App-React-MUI/login" style={{ textDecoration: "none" }}>
            <Button
              className={classes.button}
              variant="contained"
            >
              LOGIN PAGE
            </Button>
          </NavLink>
        </div>
      )}
    </Box>
  );
};

export default Home;
