import React, { Component } from "react";
import { AppBar, Typography, Toolbar, IconButton, Menu, MenuItem, Box } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Person2Icon from "@mui/icons-material/Person2";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorE1: null,
      hasNotification: false,
    };
  }

  toggleNotification = () => {
    this.setState((prevState) => ({
      hasNotification: !prevState.hasNotification,
    }));
  };

  handleClick = (event) => {
    this.setState({ anchorE1: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorE1: null });
  };

  handleLogout = () => {
    this.setState({ anchorE1: null });
  };

  addDummyNotification = () => {
    this.setState({ hasNotification: true });
  };

  handleNotificationClick = (e) => {
    e.stopPropagation();
    this.toggleNotification();
  };

  render() {
    let { anchorE1 } = this.state;
    return (
      <React.Fragment>
        <AppBar className="NavBar" sx={{ background: "#607D8B" }}>
          <Toolbar>
            <Typography>GoBhojan</Typography>
            <RestaurantIcon />

            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
              <IconButton
                color="inherit"
                onClick={this.handleNotificationClick}
              >
                <CircleNotificationsIcon
                  sx={{
                    color: this.state.hasNotification ? "red" : "inherit",
                    marginLeft: 1
                  }}
                />
              </IconButton>
              <SettingsApplicationsIcon sx={{ marginLeft: 1 }} />
              <IconButton
                color="inherit"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <Person2Icon sx={{ marginLeft: 1 }}/>
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorE1}
                open={Boolean(anchorE1)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        
      </React.Fragment>
    );
  }
}
