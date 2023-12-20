import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { gmailLogo } from "../assets/logo";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledAppbar = styled(AppBar)({
  background: "#F6F8FC",
  boxShadow: "none",
  '& div >svg:hover':{
    cursor:"pointer",
    background:"#E8EAED",
    borderRadius:"50%",
  },
});

const SearchBar = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 750,
  padding: "8px 20px",
  "&>div": {
    width: "100%",
    padding: "0 12px",
  },
});

const MenuAllIcon = styled(Box)({
  width: "40%",
  display: "flex",
  justifyContent: "flex-end",
  gap: "27px",
});

const Header = ({ toogleDrawerHandel }) => {
  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toogleDrawerHandel} />
          <img src={gmailLogo} alt="gmailLogo" style={{ marginLeft: "15px" }} />
          <SearchBar>
            <SearchIcon color="action" />
            <InputBase placeholder="Search mail" />
            <ListIcon color="action" />
          </SearchBar>
          <MenuAllIcon>
            <HelpOutlineIcon color="action" />
            <SettingsIcon color="action" />
            <AppsIcon color="action" />
            <AccountCircleOutlinedIcon color="action" />
          </MenuAllIcon>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Header;
