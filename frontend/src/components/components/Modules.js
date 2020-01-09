/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { forwardRef, Fragment, useState } from "react";

import { Link } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";

import { MdClear } from "react-icons/md";

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const styles = theme => ({
  root: {
    margin: 0,
    width: 500,
    padding: theme.spacing(2),
    backgroundColor: "#26a69a"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[50]
  },
  header: {
    fontSize: 20,
    fontWeight: 500,
    color: "#ffffff"
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className={classes.header}>{children}</div>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <MdClear />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function Module(props) {
  const { title, subtitle, list, handleOnClick, type } = props;
  const [modal, setModal] = useState(false);

  const handleClickOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  let moduleList = list.map((item, index) => (
    <Fragment key={index}>
      {type === "slide" ? (
        <a href={item.url} target="blank" css={link}>
          <ListItem id={item.id} url={item.url} onClick={handleOnClick}>
            {item.title}
          </ListItem>
        </a>
      ) : (
        <Link to={`${type}/${item.url_value}`} css={link}>
          <ListItem>
            <ListItemText>{item.title}</ListItemText>
          </ListItem>
        </Link>
      )}
    </Fragment>
  ));
  return [
    <div css={shell}>
      <div css={topBar} />
      <div css={cardContainer}>
        <button onClick={handleClickOpen} css={buttonCard}>
          <div css={cardContent}>
            <div css={cardBody}>
              <div css={moduleTitle}>{title}</div>
              <br />
              <div css={moduleSubtitle}>{subtitle}</div>
            </div>
          </div>
        </button>
      </div>
    </div>,
    <Dialog
      open={modal}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle onClose={handleClose}>{title}</DialogTitle>
      <List>{moduleList}</List>
    </Dialog>
  ];
}

{
  /* <Modal isOpen={modal} toggle={toggle}>
<ModalHeader toggle={toggle} css={modalHeader}>
  <div css={modalTitle}>{title}</div>
</ModalHeader>
<ModalBody css={modalBody}>
  <ListGroup flush>{moduleList}</ListGroup>
</ModalBody>
</Modal> */
}

const link = css`
  font-size: 16px;
  text-decoration: none;
  color: grey;
  &:link {
    text-decoration: none;
    color: grey;
  }
  &:visited {
    text-decoration: none;
    color: grey;
  }
  &:hover {
    text-decoration: none;
    color: black;
  }
  &:active {
    text-decoration: none;
    color: grey;
  }
`;

const shell = css`
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

const topBar = css`
  width: 100%;
  height: 8px;
  background: linear-gradient(to right, #00ccaf 20%, #26a69a 90%);
`;

const cardContainer = css`
  width: 100%;
  height: 100%;
`;

const buttonCard = css`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const cardContent = css`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const cardBody = css`
  padding: 0;
`;

const moduleTitle = css`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
`;

const moduleSubtitle = css`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
  //color: rgba(0, 0, 0, 0.87);
  color: #333333;
`;
