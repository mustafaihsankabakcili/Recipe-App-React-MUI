const recipesStyles = {
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

    "& .input--container": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "1000px",
      gap: "10px",
      marginBottom: "30px",
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
};

export default recipesStyles;
