const homeStyles = {
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

    "& img": {
      width: "1000px",
      borderRadius: "30px",
      margin: "50px",
    },

    "& h1": {
      color: "#FFD523",
      fontSize: "50px",
    },

    "& h3": {
      color: "#FFD523",
      fontSize: "30px",
      marginBottom: "30px",

      "& span": {
        fontSize: "25px",
      },
    },
  },

  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",

    "& button": {
      width: "150px",
      "&.MuiButton-root": {
        backgroundColor: "#FFD523",
        color: "#272727",
        fontSize: "15px",
      },
    },
  },
};

export default homeStyles;
