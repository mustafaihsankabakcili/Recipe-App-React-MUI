import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    "&.MuiBox-root": {
      backgroundColor: "#3A4750",
    },

    "& h1": {
      color: "#FFD523",
      marginBottom: "10px",
    },

    "& img": {
      width: "300px",
      height: "300px",
      border: "5px solid #FFD523",
      borderRadius: "30px",
    },
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "600px",
    margin: "50px 0",
    gap: "30px",

    "& h3": {
      color: "#FFD523",
      marginBottom: "10px",
    },
  },

  ingredients: {
    width: "400px",

    "& h3": {
      color: "#FFD523",
      textAlign: "center",
      marginBottom: "10px",
    },
  },

  button: {
    width: "200px",
    height: "55px",

    "&.MuiButton-root": {
      backgroundColor: "#FFD523",
      color: "#272727",
      fontSize: "15px",
      marginTop: '100px'
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#FFD523",
      color: "#272727",
      fontSize: "15px",
    },
  },
});

const Detail = ({ detail }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  console.log(detail);

  const [name, imgUrl, ingredients, nutrients] = detail;

  const nutrientsArr = nutrients.map((nutrient, i) => {
    return(i < 8 && (
        <p key={i}>
          {nutrient.label}: {nutrient.total.toFixed(2)}
          {nutrient.unit}
        </p>
      ))
  });

  const ingredientsArr = ingredients.map((ingredient, i) => (
    <p key={i}>
      {i + 1}) {ingredient}
    </p>
  ));
  return (
    <Box className={classes.root}>
      <h1>{name}</h1>
      <Box className={classes.container}>
        <img src={imgUrl} alt="" />
        <Box className={classes.nutrients}>
          <h3>Nutrients</h3>
          {nutrientsArr}
        </Box>
      </Box>
      <Box className={classes.ingredients}>
        <h3>Ingredients</h3>
        {ingredientsArr}
      </Box>
      <Button className={classes.button} onClick={() => navigate('/Recipe-App-React-MUI/recipes')}>Back to Recipes</Button>
    </Box>
  );
};

export default Detail;
