import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import traditionalFood from "../../assets/traditionalFood.jpeg";
import aboutStyles from "./aboutStyles";

const useStyles = makeStyles(aboutStyles);

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={traditionalFood} alt="" />
      <div className="container">
        <h2>
          About Frontend Developer <span>Mustafa Ihsan Kabakcili</span>
        </h2>
        <div>
          <p>I'm currently learning Front-End Development Languages.</p>
          <p>I have already known JS, ReactJS, Python, HTML5, CSS3.</p>
          <p>
            Send email: <span>mustafaihsankabakcili@gmail.com</span>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default About;
