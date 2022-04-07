import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import traditionalFood from "../../assets/traditionalFood.jpeg";

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

    "& h1": {
      textAlign: "center",
    },

    "& img": {
      width: "650px",
      borderRadius: "30px",
      margin: "30px",
    },

    "& .container": {
      width: "650px",
      borderRadius: "30px",
      height: "250px",
      padding: "30px",
      border: "1px solid white",

      "& h2": {
        textAlign: 'center',
        fontSize: "20px",
        marginBottom: '20px',

        "& span": {
          color: "#FFD523",
          fontSize: '25px'
        },
      },

      '& div': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px',

          '& span': {
            color: "#FFD523",
            fontSize: '20px'
          }
      }
    },
  },
});

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
          <p>Send email: <span>mustafaihsankabakcili@gmail.com</span></p>
        </div>
      </div>
    </Box>
  );
};

export default About;
