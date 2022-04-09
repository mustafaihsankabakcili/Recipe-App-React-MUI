import React from "react";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import recipeCardStyles from "./recipeCardStyles";

const useStyles = makeStyles(recipeCardStyles);

const RecipeCard = ({ recipe, detailHandler }) => {
  const classes = useStyles();

  const { label, image, ingredientLines, digest } = recipe;

  const detail = [label, image, ingredientLines, digest];

  return (
    <Card className={classes.root} onClick={() => detailHandler(detail)}>
      <h3>{label}</h3>
      <img src={image} alt="card" />
    </Card>
  );
};

export default RecipeCard;
