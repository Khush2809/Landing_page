import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import image14 from "../Images/image14.svg";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import Vector from "../Images/Vector.png";
import StarIcon from "@material-ui/icons/Star";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./../Components/Appbar.css";
import Home from "../Pages/Home";
import Table from "./Table";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    paddingBottom: "3%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
  },
  logo1: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.15px",
    color: "white",
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        {/* <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar> */}
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#3F0E40",
          }}
        >
          <Typography className={classes.logo1}>KEYWORDS</Typography>
          <h5>Hello</h5>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {/* <h2>Hello</h2> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={image14}
            style={{
              // width: "52.6px",
              // height: "52.6px",
              // marginTop: "2.55%",
              borderRadius: "100%",
              alignItems: "center",
            }}
          ></img>
          <h3 className={classes.logo}>TermMonitor</h3>
        </div>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              {" "}
              <HomeIcon />{" "}
            </ListItemIcon>
            <ListItemText className="listItemText">Add Keywords</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              {" "}
              <GroupIcon />{" "}
            </ListItemIcon>
            <ListItemText className="listItemText">Matches</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Vector}></img>
            </ListItemIcon>
            <ListItemText className="listItemText">Manage sources</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Vector}></img>
            </ListItemIcon>
            <ListItemText className="listItemText">Integration</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Vector}></img>
            </ListItemIcon>
            <ListItemText className="listItemText">Alerts</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <StarIcon />{" "}
            </ListItemIcon>
            <ListItemText className="listItemText">Settings</ListItemText>
            <ListItemIcon>
              <ArrowDropDownIcon />{" "}
            </ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText className="listItemText">Billings</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
        <Table />
      </main>
    </div>
  );
}
