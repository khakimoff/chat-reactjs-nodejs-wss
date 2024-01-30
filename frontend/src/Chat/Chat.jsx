import React, { useEffect, useRef } from "react";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import {
  Toolbar,
  Typography,
  CssBaseline,
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  InputAdornment,
  Avatar,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import HaderHideOnScroll from "../copmonents/HideOnScroll";
import ScrollTop from "../copmonents/ScrollTop";

const useStyles = makeStyles({
  wrap: {
    maxWidth: "900px",
    width: "100%",
  },

  bottom: {
    display: "flex",
    position: "fixed",
    flexDirection: "column",
    bottom: 0,
    maxWidth: "900px",
    right: 0,
    left: 0,
    margin: "0 auto",
    width: "100%",
    alignItems: "flex-end",
    backgroundColor: "white",
    zIndex: 3,
  },

  form: {
    display: "flex",
    alignItems: "flex-end",
    margin: "0 auto",
    padding: "0 8px 0 14px",
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: "900px",
    width: "100%",
    backgroundColor: "white",
    zIndex: 20,
    marginBottom: "20px",
  },

  input: {
    flex: "3 1 800px",
    marginBottom: "10px",
    margin: "auto 10px auto!important",
  },

  text: {
    padding: "10px",
  },

  paper: {
    paddingBottom: 50,
    backgroundColor: "white",
    boxShadow: "none!important",
  },

  button: {
    margin: "10px",
    marginBottom: "10px",
  },

  newUser: {
    color: "#3f51b5!important",
    textAlign: "center",
  },

  listitemText: {
    color: "black",
  },

  listitemAvatar: {
    zIndex: "0",
  },
});

function Chat({
  messages,
  myName,
  value,
  setValue,
  sendMessage,
  setDisabled,
  disabled,
  hidden,
  setHidden,
}) {
  const classes = useStyles();
  const messageRef = useRef();
  const time = moment().format("HH:mm");

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  function onChangeTextFiel(e) {
    const value = e.target.value;
    setValue(value);
    value.replace(/\s+/g, "").length > 0
      ? setDisabled(false)
      : setDisabled(true);
  }

  function onKeyDownTextField(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      if (e.target.value.replace(/\s+/g, "").length > 0) {
        sendMessage();
      }
    }
  }

  function onSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <div className={classes.wrap} ref={messageRef}>
      <CssBaseline />
      <HaderHideOnScroll />
      <Toolbar id="back-to-top-anchor" />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Test chat
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, userName, message, person, event }) => {
            return (
              <React.Fragment key={id}>
                {event === "connection" ? (
                  <ListSubheader className={classes.newUser}>
                    User {userName} connected
                  </ListSubheader>
                ) : (
                  <ListItem>
                    <ListItemAvatar className={classes.listitemAvatar}>
                      <Avatar
                        alt="Profile Picture"
                        src={person}
                        style={{
                          display: `${userName === myName ? "none" : "flex"}`,
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.listitemText}
                      primary={message}
                      secondary={
                        userName === myName ? `${time}` : `${userName} ${time}`
                      }
                      style={{
                        textAlign: `${userName === myName ? "right" : "left"}`,
                      }}
                    />
                  </ListItem>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
      <div className={classes.bottom}>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <TextField
            id="standard-search"
            type="search"
            variant="standard"
            className={classes.input}
            label="Message"
            validat
            multiline
            autoFocus
            rowsMax={5}
            value={value}
            onChange={onChangeTextFiel}
            onKeyDown={onKeyDownTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setHidden(!hidden)}
                ></InputAdornment>
              ),
            }}
          ></TextField>
          <Button
            disabled={disabled}
            onClick={sendMessage}
            variant="contained"
            color="primary"
            size="normal"
            className={classes.button}
            startIcon={<SendIcon />}
            type="submit"
          />
        </form>
        <ScrollTop />
      </div>
    </div>
  );
}

export default Chat;
