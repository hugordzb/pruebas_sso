import React from 'react';

import Fade from '@material-ui/core/Fade';
import { IconButton, Card, CardContent, Typography, Avatar, CardActions, Button, Popover } from '@material-ui/core';

import { connect } from 'react-redux';
import { signOut } from '../../../../redux/actions';

function UserSessionMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    props.signOut();
  }

  return (
    <div>

      <IconButton variant="contained" onClick={handleClick}>
        <Avatar>{props.displayName.charAt(0)}</Avatar>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.displayName}
            </Typography>
            <Typography color="textSecondary">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.department}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleSignOut}>Cerrar sesión</Button>
          </CardActions>
        </Card>
      </Popover>

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(UserSessionMenu);