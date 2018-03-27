import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import classNames from 'classnames'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu'
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import {withStyles} from 'material-ui/styles'
const drawerWidth = 240

const styles = theme => ({
  root: {
      flexGrow: 1,
	  paddingLeft: 0
  },
  app_frame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  app_bar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
	app_bar_shift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'app_bar_shift_left': {
    marginLeft: drawerWidth,
  },
  'app_bar_shift_right': {
    marginRight: drawerWidth,
  },
  menu_button: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer_paper: {
    position: 'fixed',
    width: drawerWidth,
  },
  drawer_header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content_left': {
    marginLeft: -drawerWidth,
  },
  'content_right': {
    marginRight: -drawerWidth,
  },
	content_shift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'content_shift_left': {
    marginLeft: 0,
  },
  'content_shift_right': {
      marginRight: 0,
  }
})

class App_Drawer extends React.Component {
	constructor () {
		super()
	}

	render () {
		const {classes, theme} = this.props
		console.log(this.props)
		return (
			<Drawer
			  anchor="left"
			  onClose={this.props.toggleDrawerOpen}
			  open={this.props.drawer_open}
			  classes={{
				  paper: classes.drawer_paper,
			  }}
			  >
			  <div className={classes.drawer_header}>
				<IconButton onClick={this.props.toggleDrawerOpen}>
				  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			  </div>
			  <List component="nav">
				<ListItem button>
				  <ListItemIcon>
					<InboxIcon />
				  </ListItemIcon>
				  <ListItemText primary="Inbox" />
				</ListItem>
				<ListItem button>
				  <ListItemIcon>
					<DraftsIcon />
				  </ListItemIcon>
				  <ListItemText primary="Drafts" />
				</ListItem>
			  </List>
			  <Divider />
			  <Divider />
			</Drawer>
		)
	}
}
var AppDrawer = withStyles(styles, {withTheme: true})(App_Drawer)

class MainBar extends React.Component {
	constructor () {
		super()
		this.state = {}
		this.toggleDrawerOpen = this.toggleDrawerOpen.bind(this)
	}
	toggleDrawerOpen () {
		this.setState({"drawer_open": !this.state.drawer_open})
	}
	render () {
		const {classes, theme} = this.props
		return (<AppBar className={classes.app_bar} position="static">
					<Toolbar disableGutters={!this.state.drawer_open}>
						<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={this.toggleDrawerOpen}
						className={classNames(classes.menu_button, this.state.drawer_open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					<AppDrawer drawer_open={this.state.drawer_open} toggleDrawerOpen={this.toggleDrawerOpen} classes={classes}/>
				</AppBar>)
	}
}
export default withStyles(styles, { withTheme: true })(MainBar);
