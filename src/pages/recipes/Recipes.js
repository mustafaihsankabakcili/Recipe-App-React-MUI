import React, { useState } from "react";
import RecipeCard from './RecipeCard'
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


const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: '100vh',
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
      marginBottom: '10px'
    },

    "& .input--container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "1000px",
      gap: "10px",
      marginBottom: '30px'
    },
  },

  textField: {
    width: "250px",

    "& input": {
      color: "white",
    },

    "& label": {
      color: "white",
    },

    "& label.Mui-focused": {
      color: "#FFD523",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFD523",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },

      "&:hover fieldset": {
        borderColor: "#FFD523",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#FFD523",
      },
    },
  },

  formControl: {
    width: "250px",

    "& input": {
      color: "white",
    },

    "& label": {
      color: "white",
    },

    "& label.Mui-focused": {
      color: "#FFD523",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFD523",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },

      "&:hover fieldset": {
        borderColor: "#FFD523",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#FFD523",
      },
    },

    "& div.MuiOutlinedInput-root div.MuiSelect-select": {
      color: "white",
    },
  },

  menuItem: {
    color: "white",

    "&.MuiMenuItem-root": {
      color: "black",
    },
  },

  button: {
    width: "250px",
    height: "55px",

    "&.MuiButton-root": {
      backgroundColor: "#FFD523",
      color: "#272727",
      fontSize: "15px",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#FFD523",
      color: "#272727",
      fontSize: "15px",
    },
  },

  recipes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
  }
});

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
      <Box className={classes.recipes}>{hits.map((hit, i) => (
        <RecipeCard key={i} detailHandler={props.detailHandler} recipe={hit.recipe}/>
      ))}</Box>
    </Box>
  );
};

export default Recipes;
