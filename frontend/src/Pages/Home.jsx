import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "5%",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    marginRight: "10px",
  },
  filled: {
    backgroundColor: "rgba(63, 14, 64, 1)",
    color: "white",
    width: "58px",
    height: "29px",
    fontSize: "15px",
    marginRight: "10px",
  },
  upgrade: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.46px",
  },
  advance: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.15px",
    fontSize: "15px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.main}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="row">
            <Box className={classes.title}>Add Another Keyword</Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.filled}
            >
              1/3
            </Box>
            <Box display="flex" alignItems="center" className={classes.upgrade}>
              UPGRADE
            </Box>
          </Box>
          <Box className={classes.advance}>Advance Search</Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
