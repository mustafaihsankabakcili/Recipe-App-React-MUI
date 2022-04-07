import React from "react";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "350px",
    padding: "20px",
    border: "3px solid gray",
    textAlign: "center",

    "&.MuiPaper-root": {
      backgroundColor: "#272727",
      borderRadius: "25px",
    },

    "&:hover": {
      borderColor: "#FFD523",
      cursor: "pointer",
    },

    "&:hover img": {
      borderColor: "#FFD523",
    },

    "& h3": {
      color: "#FFD523",
      marginBottom: "15px",
    },

    "& img": {
      width: "210px",
      height: "210px",
      border: "3px solid gray",
      borderRadius: "25px",
    },
  },
});

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
