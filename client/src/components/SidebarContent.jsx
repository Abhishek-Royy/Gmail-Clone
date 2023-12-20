import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import styled from "@emotion/styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const SidebarContent = () => {
  const ComposeButton = styled(Button)({
    gap: "10px",
    background: "#C2E7FF",
    padding: "1vw 1.5vw",
    boxShadow: "none",
    color: "#000",
    borderRadius: "18px",
    textTransform: "initial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const Container = styled(Box)({
    padding: "8px",
    "& > ul": {
      fontSize: "14px",
      fontWeight: 510,
      cursor: "pointer",
    },
    "& > ul > li:hover": {
      background: "#EAEBEF",
      borderRadius: "0 30px 30px 0",
    },
    "& > ul > li > svg": {
      marginRight: "20px",
    },
  });

  // ALL THE SIDEBAR LIST DATA
  const SIDEBAR_DATA = [
    {
      name: "inbox",
      title: "Inbox",
      icon: InsertPhotoOutlinedIcon,
    },
    {
      name: "starred",
      title: "Starred",
      icon: StarBorderOutlinedIcon,
    },
    {
      name: "snoozed",
      title: "Snoozed",
      icon: AccessTimeOutlinedIcon,
    },
    {
      name: "sent",
      title: "Sent",
      icon: SendOutlinedIcon,
    },
    {
      name: "drafts",
      title: "Drafts",
      icon: NoteAddOutlinedIcon,
    },
    {
      name: "allmail",
      title: "All Mail",
      icon: MailOutlinedIcon,
    },
    {
      name: "chats",
      title: "Chats",
      icon: ChatOutlinedIcon,
    },
    {
      name: "bin",
      title: "Bin",
      icon: DeleteOutlineOutlinedIcon,
    },
  ];

  return (
    <Container>
      <ComposeButton variant="contained">
        <EditTwoToneIcon />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((data, index) => (
          <ListItem key={index}>
            <data.icon fontSize="small" /> {data.title}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SidebarContent;
