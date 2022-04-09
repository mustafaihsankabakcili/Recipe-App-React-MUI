import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import recipesStyles from "./recipesStyles";

const useStyles = makeStyles(recipesStyles);

const Recipes = (props) => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("");
  const [hits, setHits] = useState([]);

  const classes = useStyles();

  const apiKey = "20a6a1f609b7ff817d04a366c7365cf2";
  const appId = "4010e42e";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${meal}`;

  const handleSelect = (e) => {
    setMeal(e.target.value);
  };

  const handleTextField = (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = () => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => data.hits)
      .then((hits) => {
        setHits(hits);
      });
  };

  return (
    <Box className={classes.root}>
      <h1>Kitchen's Recipes</h1>
      <Box className="input--container">
        <TextField
          className={classes.textField}
          id="outlined-basic"
          label="Food Name"
          variant="outlined"
          onChange={handleTextField}
          value={query}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Meal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={meal}
            label="Meal"
            onChange={handleSelect}
          >
            <MenuItem className={classes.menuItem} value={"Breakfast"}>
              Breakfast
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"Lunch"}>
              Lunch
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"Dinner"}>
              Dinner
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"Snack"}>
              Snack
            </MenuItem>
            <MenuItem className={classes.menuItem} value={"Teatime"}>
              Teatime
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          onClick={searchHandler}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <Box className={classes.recipes}>
        {hits.map((hit, i) => (
          <RecipeCard
            key={i}
            detailHandler={props.detailHandler}
            recipe={hit.recipe}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Recipes;
