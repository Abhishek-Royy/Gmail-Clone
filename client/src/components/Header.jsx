import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";
import { gmailLogo } from "../assets/logo";
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import InputBase from '@mui/material/InputBase';

const StyledAppbar=styled(AppBar)({
    background:"#dadada",
    boxShadow:"none"
})

const InputField=styled(InputBase)({
    border:"1px solid black"
})

const Header = () => {
  return (
    <>
      <StyledAppbar position="static">
        <Toolbar>
            <MenuIcon color="action"/>
            <img src={gmailLogo} alt="gmailLogo" style={{marginLeft:"15px"}}/>
            <div>
                <SearchIcon color="action"/>
                <InputField/>
                <ListIcon color="action"/>
            </div>
        </Toolbar>
      </StyledAppbar>
    </>
  );
};

export default Header;
