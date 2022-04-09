const detailStyles = {
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
      marginTop: "100px",
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#FFD523",
      color: "#272727",
      fontSize: "15px",
    },
  },
};

export default detailStyles;
