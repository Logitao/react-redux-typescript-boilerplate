import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import * as React from 'react';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { WithStyles, createStyles, withStyles } from '@material-ui/core';
import { AppState } from '../app.state';
import { setSideBar, toggleSideBar } from '../sidebar/actions.sidebar';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = createStyles({
  list: {
    width: 250
  }
});

const actions = {
  toggle: () => toggleSideBar(),
  setSideBar: (sideBarState: boolean) => () => setSideBar(sideBarState)
};

interface Props extends WithStyles<typeof styles> {
  open: boolean;
  toggle: typeof actions.toggle;
  setSideBar: typeof actions.setSideBar;
}

const SideBar = (props: Props): JSX.Element => (
  <SwipeableDrawer
    anchor="left"
    open={props.open}
    onClose={props.setSideBar(false)}
    onOpen={props.setSideBar(true)}
  >
    <div className={props.classes.list}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Caixa Principal" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Encaminhadas" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Lixo" />
        </ListItem>
        <ListItem button component="a">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  </SwipeableDrawer>
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
)(withStyles(styles)(SideBar));
