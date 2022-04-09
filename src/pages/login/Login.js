import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import loginStyles from "./loginStyles";

const useStyles = makeStyles(loginStyles);

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <h1>LOGIN</h1>
      <Box
        className={classes.form}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.textfield}
          id="username"
          label="Username"
          variant="outlined"
          onChange={usernameHandler}
        />
        <TextField
          className={classes.textfield}
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={passwordHandler}
        />
        <Button
          className={classes.button}
          onClick={() => onLogin(username, password)}
          variant="contained"
        >
          LOGIN
        </Button>
      </Box>
      <p>Please enter username and password longer than 6. (Enter randomly.)</p>
    </Box>
  );
};

export default Login;
