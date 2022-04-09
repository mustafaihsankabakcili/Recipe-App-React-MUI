import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import detailStyles from "./detailStyles";

const useStyles = makeStyles(detailStyles);

const Detail = ({ detail }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [name, imgUrl, ingredients, nutrients] = detail;

  const nutrientsArr = nutrients.map((nutrient, i) => {
    return (
      i < 8 && (
        <p key={i}>
          {nutrient.label}: {nutrient.total.toFixed(2)}
          {nutrient.unit}
        </p>
      )
    );
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
      <Button
        className={classes.button}
        onClick={() => navigate("/Recipe-App-React-MUI/recipes")}
      >
        Back to Recipes
      </Button>
    </Box>
  );
};

export default Detail;
