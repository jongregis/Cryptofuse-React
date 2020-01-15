import React, { useState } from "react";
import QRCode from "qrcode.react";
import Button from "../Dashboard/UserProfile/CustomButtons/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function TwoFactor() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button color="primary" round onClick={handleClickOpen}>
        Generate Code
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Two-Factor Authorization Setup
        </DialogTitle>
        <DialogContent dividers>
          <QRCode
            value="otpauth://totp/Example:email?secret=GJUXGXTJNMRSYSSAOJHDQXTDHRVWQQLT&issuer=Cryptofuse"
            level="H"
            includeMargin={true}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}