import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import { MdClose } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
import { ListItemText } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  title: {
    margin: 0,
    padding: theme.spacing(2)
  },
  content: {
    margin: 0,
    paddingTop: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  modal: {
    width: "100%"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  playButton: {
    "&:focus": {
      outline: 0
    }
  }
}));

export default function Video(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <ListItem button>
      <ListItemText primary={props.name.replace(/-/g, " ").toUpperCase()} />

      <Dialog open={open} maxWidth="md" transitionDuration={400}>
        <DialogTitle className={classes.title} disableTypography>
          <Typography variant="h6">
            {props.name.replace(/-/g, " ").toUpperCase()}
          </Typography>
          <IconButton onClick={handleClose} className={classes.closeButton}>
            <MdClose />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <video
            controls
            autoPlay
            //poster={require("../../images/videoLoad.png")}
          >
            <source
              src={require(`../../videos/videos/English/${props.name}.mkv`)}
            />
          </video>
        </DialogContent>
      </Dialog>
      <ListItemSecondaryAction>
        <IconButton
          onClick={handleOpen}
          color="primary"
          className={classes.playButton}
        >
          <MdPlayArrow size={18} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
