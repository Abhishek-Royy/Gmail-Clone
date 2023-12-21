import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const dialogStyle = {
  maxWidth: "100%",
  height: "90%",
  width: "80%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const HeaderBox = styled(Box)({
  background: "#F2F6FC",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  "&>div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
  },
  "&>p": {
    fontSize: "14px",
    fontWeight: 540,
  },
});

const InputBaseBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "&>div>input": {
    borderBottom: "1px solid #dadada",
    fontSize: "14px",
    padding: "8px 0",
  },
});

const FooterBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2vw",
});

const SendFooterButton = styled(Button)({
  background: "#1B61D1",
  color: "#fff",
  textTransform: "initial",
  width: "8vw",
  padding: "10px",
  borderRadius: "30px",
  fontWeight: 550,
});

const ComposeMail = ({ openComposeMail, setopenComposeMail }) => {
  const [to, setto] = useState("");
  const [subject, setsubject] = useState("");
  const [body, setbody] = useState("");

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "practice12345@yopmail.com",
    Password: "2AA35208EB5C1A02FAA2CD585E4ECA68B490",
    Port: 2525,
  };

  const closeDialogBox = (e) => {
    e.preventDefault();

    setopenComposeMail(false);
  };

  const sendMail = (e) => {
    if (!to || !subject || !body) {
      alert("Please fill all feild..");
      return;
    }

    e.preventDefault();
    console.log(e);
    if (window.Email) {
      window.Email.send({
        ...config,
        To: to,
        From: "abhishek699.roy@gmail.com",
        Subject: subject,
        Body: body,
      })
        .then((message) => alert(message))
        .catch((error) => alert("Failed to send Email..", error));
    }
    setopenComposeMail(false);
  };

  return (
    <Dialog open={openComposeMail} PaperProps={{ sx: dialogStyle }}>
      <HeaderBox>
        <Typography>New Message</Typography>
        <Box>
          <RemoveIcon fontSize="small" />
          <CloseIcon fontSize="small" onClick={(e) => closeDialogBox(e)} />
        </Box>
      </HeaderBox>

      <InputBaseBox>
        <InputBase
          placeholder="To"
          value={to}
          onChange={(e) => setto(e.target.value)}
        />
        <InputBase
          placeholder="Subject"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
        />
      </InputBaseBox>

      <TextField
        multiline
        rows={20}
        value={body}
        onChange={(e) => setbody(e.target.value)}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />

      <FooterBox>
        <SendFooterButton variant="contained" onClick={(e) => sendMail(e)}>
          Send
        </SendFooterButton>
        <DeleteOutlineOutlinedIcon onClick={() => setopenComposeMail(false)} />
      </FooterBox>
    </Dialog>
  );
};

export default ComposeMail;

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// import React, { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";
// import styled from "@emotion/styled";
// import { InputBase } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// const dialogStyle = {
//   maxWidth: "100%",
//   height: "90%",
//   width: "80%",
//   maxHeight: "100%",
//   boxShadow: "none",
//   borderRadius: "10px 10px 0 0",
// };

// // Mock function to simulate sending an email via SMTP
// const sendEmailSMTP = async (emailData) => {
//   const { Host, Username, Password, Port, To, From, Subject, Body } = emailData;

//   // Simulating a successful email sending after 2 seconds
//   return new Promise((resolve, reject) => {
//     // Simulate sending using SMTP (replace this with actual SMTP implementation)
//     // This is just a mock example to demonstrate the flow
//     console.log("Simulating SMTP email sending...");
//     console.log("To:", To);
//     console.log("From:", From);
//     console.log("Subject:", Subject);
//     console.log("Body:", Body);

//     setTimeout(() => {
//       // Resolve with a success message
//       resolve("Email sent successfully!");
//     }, 2000);
//   });
// };

// const HeaderBox = styled(Box)({
//   background: "#F2F6FC",
//   width: "100%",
//   height: "100px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: "0 15px",
//   "&>div": {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "10px",
//     cursor: "pointer",
//   },
//   "&>p": {
//     fontSize: "14px",
//     fontWeight: 540,
//   },
// });

// const InputBaseBox = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   padding: "0 15px",
//   "&>div>input": {
//     borderBottom: "1px solid #dadada",
//     fontSize: "14px",
//     padding: "8px 0",
//   },
// });

// const FooterBox = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   padding: "2vw",
// });

// const SendFooterButton = styled(Button)({
//   background: "#1B61D1",
//   color: "#fff",
//   textTransform: "initial",
//   width: "8vw",
//   padding: "10px",
//   borderRadius: "30px",
//   fontWeight: 550,
// });

// const ComposeMail = ({ openComposeMail, setopenComposeMail }) => {
//   const [to, setTo] = useState("");
//   const [subject, setSubject] = useState("");
//   const [body, setBody] = useState("");

//   const closeDialogBox = () => {
//     setopenComposeMail(false);
//   };

//   const sendMail = async () => {
//     if (!to || !subject || !body) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const message = await sendEmailSMTP({
//         Host: "smtp.elasticemail.com",
//         Username: "emailclone12345@yopmail.com",
//         Password: "66D3A84230A65E5E071A0CFF4008FA3B46C7",
//         Port: 2525,
//         To: to,
//         From: "abhishek699.roy@gmail.com",
//         Subject: subject,
//         Body: body,
//       });

//       alert(message); // Alert when email is sent successfully
//       setopenComposeMail(false);
//     } catch (error) {
//       console.error("Failed to send Email:", error);
//       alert("Failed to send Email. Check console for details.");
//     }
//   };

//   return (
//     <Dialog open={openComposeMail} PaperProps={{ sx: dialogStyle }}>
//       <HeaderBox>
//         <Typography>New Message</Typography>
//         <Box>
//           <RemoveIcon fontSize="small" />
//           <CloseIcon fontSize="small" onClick={closeDialogBox} />
//         </Box>
//       </HeaderBox>

//       <InputBaseBox>
//         <InputBase
//           placeholder="To"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//         />
//         <InputBase
//           placeholder="Subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//         />
//       </InputBaseBox>

//       <TextField
//         multiline
//         rows={20}
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
//       />

//       <FooterBox>
//         <SendFooterButton variant="contained" onClick={sendMail}>
//           Send
//         </SendFooterButton>
//         <DeleteOutlineOutlinedIcon onClick={() => setopenComposeMail(false)} />
//       </FooterBox>
//     </Dialog>
//   );
// };

// export default ComposeMail;
