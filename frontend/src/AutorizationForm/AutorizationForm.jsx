import { InputAdornment, Button, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";

import Logo from "../copmonents/Logo";

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    maxWidth: "300px",
    margin: "0 auto",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.42)",
    padding: "50px",
  },

  textField: {
    margin: "30px auto 20px!important",
  },
  button: {
    marginTop: "30px",
    width: "100%",
  },
});

function AutorizartionForm({
  value,
  onClick,
  setUsername,
  setMyName,
  disabled,
  setDisabled,
}) {
  const classes = useStyles();

  function onSubmitForm(e) {
    e.preventDefault();
  }

  function onChangeTextField(e) {
    const value = e.target.value;
    setUsername(value);
    setMyName(value);
    value.replace(/\s+/g, "").length > 0
      ? setDisabled(false)
      : setDisabled(true);
  }

  return (
    <div className={classes.wrap}>
      <form onSubmit={onSubmitForm} className={classes.form}>
        <Logo height="100px" widtd="100px" />
        <TextField
          id="standard-search"
          type="search"
          variant="standard"
          autoFocus
          className={classes.textField}
          value={value}
          onChange={onChangeTextField}
          label="Enter your name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={onClick}
          className={classes.button}
          type="submit"
          variant="outlined"
          color="primary"
          disabled={disabled}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default AutorizartionForm;
