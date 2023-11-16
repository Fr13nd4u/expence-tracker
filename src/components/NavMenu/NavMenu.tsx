import React from "react";
import { AppBar, Toolbar, IconButton, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ExpensesIcon,
  HomeIcon,
  SettingsIcon,
} from "../shared/SVGs";

const NavMenu: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#fff", padding: "20px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className="iconButton"
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/expenses"
          color="inherit"
          className="iconButton"
        >
          <ExpensesIcon />
        </IconButton>

        <Fab color="secondary" aria-label="add" className="fabButton">
          +
        </Fab>

        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className="iconButton"
        >
          <CalendarIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className="iconButton"
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
