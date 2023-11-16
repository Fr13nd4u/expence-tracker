import React from "react";
import { AppBar, Toolbar, IconButton, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ExpensesIcon,
  HomeIcon,
  SettingsIcon,
} from "../shared/SVGs";
import plus_icon from "../../assets/plus_icon.png";
import styles from "./NavMenu.module.css";

const NavMenu: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#fff", padding: "20px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className={styles.iconButton}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/expenses"
          color="inherit"
          className={styles.iconButton}
        >
          <ExpensesIcon />
        </IconButton>

        <Fab color="primary" aria-label="add" className="fabButton">
          <img src={plus_icon} alt="plus_icon" />
        </Fab>

        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className={styles.iconButton}
        >
          <CalendarIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          className={styles.iconButton}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
