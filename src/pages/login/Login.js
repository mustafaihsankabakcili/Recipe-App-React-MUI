import React, {useState} from "react";
import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: '100vh',
    padding: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    '&.MuiBox-root': {
      backgroundColor: '#3A4750'
    }
  },

  h1: {
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    width: "300px",
    margin: "30px",
    borderRadius: "30px",
    gap: "10px",
  },


  textfield: {
    width: '100%',

    '& input':{
      color: 'white'
    },

    "& label": {
      color: 'white',
    },

    "& label.Mui-focused": {
      color: '#FFD523',
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: '#FFD523',
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: '#FFD523',
      },
      "&.Mui-focused fieldset": {
        borderColor: '#FFD523',
      },
    },
  },

  button: {
    width: '100px',

    '&.MuiButton-root': {
      backgroundColor: '#FFD523',
      color: '#272727', 
      fontSize: '15px'
    },
    '&.MuiButton-root:hover': {
      backgroundColor: '#FFD523',
      color: '#272727', 
      fontSize: '15px'
    },
  }
});

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

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
          type='password'
          onChange={passwordHandler}
        />
        <Button className={classes.button} onClick={() => onLogin(username, password)} variant="contained">LOGIN</Button>
      </Box>
      <p>Please enter username and password longer than 6. (Enter randomly.)</p>
    </Box>
  );
};

export default Login;
