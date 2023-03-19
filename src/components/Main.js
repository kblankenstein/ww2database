import "./Main.css";
import * as React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Main = () => {

  return (
    <>
      <div className="contact">
        <Button
          variant="outlined"
          color="inherit"
          href="https://paypal.me/kblankenstein"
          target="_blank"
          rel="noreferrer"
          disableElevation
          startIcon={<AttachMoneyIcon />}
        >
          Donate
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="mailto:kimberly.blankenstein@gmail.com"
          disableElevation
          startIcon={<EmailIcon />}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="https://www.facebook.com/littlejoenoyes"
          target={"_blank"}
          rel="noreferrer"
          disableElevation
          startIcon={<Facebook />}
        >
          Facebook
        </Button>
      </div>
    </>
  );
};

export default Main;
