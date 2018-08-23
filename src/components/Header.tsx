import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  createStyles,
  WithStyles,
  withStyles,
  Theme,
  withWidth
  // WithTheme
} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import SideBar from './SideBar';
import { WithWidth } from '@material-ui/core/withWidth';
import { toggleSideBar } from '../sidebar/actions.sidebar';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from './../app.state';
import { connect } from 'react-redux';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: 'baseline'
    },
    flex: {
      flexGrow: 1
    },

    list: {
      width: 250
    }
  });

const actions = {
  toggle: () => toggleSideBar()
};
interface Props extends WithStyles<typeof styles>, WithWidth {
  toggleSideBar: typeof actions.toggle;
  open: boolean;
}

//TYPES MAPSTATETOPROPS
const Header = (props: Props): JSX.Element => (
  <div className={props.classes.root}>
    <AppBar position="fixed">
      <SideBar open={props.open} />
      <Toolbar>
        <Hidden only={['xl', 'lg', 'md']}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={props.toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography
          variant="title"
          color="inherit"
          className={props.classes.flex}
        >
          Titulo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators(
    {
      ...actions
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(Header)));
