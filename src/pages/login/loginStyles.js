const loginStyles = {
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    "&.MuiBox-root": {
      backgroundColor: "#3A4750",
    },
  },

  h1: {
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    margin: "30px",
    borderRadius: "30px",
    gap: "10px",
  },

  textfield: {
    width: "100%",

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

  button: {
    width: "100px",

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
};

export default loginStyles;
