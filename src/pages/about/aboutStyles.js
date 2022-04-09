const aboutStyles = {
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
      textAlign: "center",
    },

    "& img": {
      width: "650px",
      borderRadius: "30px",
      margin: "30px",
    },

    "& .container": {
      width: "650px",
      borderRadius: "30px",
      height: "250px",
      padding: "30px",
      border: "1px solid white",

      "& h2": {
        textAlign: "center",
        fontSize: "20px",
        marginBottom: "20px",

        "& span": {
          color: "#FFD523",
          fontSize: "25px",
        },
      },

      "& div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",

        "& span": {
          color: "#FFD523",
          fontSize: "20px",
        },
      },
    },
  },
};

export default aboutStyles;
