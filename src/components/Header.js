import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import RoomIcon from '@material-ui/icons/Room';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Info Covid-19
          </Typography>
            <a href="/map" styles="color:white;" ><RoomIcon/></a>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
