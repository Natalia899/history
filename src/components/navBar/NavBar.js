import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
	Drawer,
	CssBaseline,
	AppBar,
	Toolbar,
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HelpIcon from "@material-ui/icons/Help";
import AddIcon from "@material-ui/icons/Add";
import { inject, observer } from "mobx-react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InfoIcon from "@material-ui/icons/Info";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import "../Styles/Navbar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const NavBar = inject("EventsStore")(
	observer((props) => {
		console.log(props.EventsStore.user);
		const classes = useStyles();
		const theme = useTheme();
		const [open, setOpen] = React.useState(false);

		const handleDrawerOpen = () => {
			setOpen(true);
		};

		const handleDrawerClose = () => {
			setOpen(false);
		};

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					style={{
						backgroundColor: "rgb(52, 52, 68)",
					}}
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === "ltr" ? (
								<ChevronLeftIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</div>
					<Divider />
					<List class='list'>
						<Link to='/about'>
							<div className="li" >
							<ListItem  button key='About'>
								<ListItemIcon>
									<InfoIcon />
								</ListItemIcon>
								<ListItemText class='nav-content'  primary='About' />
							</ListItem>
							</div>
						</Link>

						<Link to='/support'>
							<div className="li" >
							<ListItem  button key='Support'>
								<ListItemIcon>
									<HelpIcon />
								</ListItemIcon>
								<ListItemText class='nav-content'  primary='Support' />
							</ListItem>
							</div>
						</Link>

						<Link to='/AddSuggestion'>
							<div className="li" >
							<ListItem  button key='AddSuggestion'>
								<ListItemIcon>
									<AddIcon />
								</ListItemIcon>
								<ListItemText class='nav-content'  primary='AddSuggestion' />
							</ListItem>
							</div>
						</Link>

						<Link to='/'>
							<div className="li" >
							<ListItem  button key='Logout'>
								<ListItemIcon>
									<VpnKeyIcon />
								</ListItemIcon>
								<ListItemText class='nav-content'  primary='Logout' />
							</ListItem>
							</div>
						</Link>
						{props.EventsStore.user && props.EventsStore.user.type === "admin" ? (
							<Link to='/SuggestionsList'>
								<div className="li" >
								<ListItem  button key='SuggestionsList'>
									<ListItemIcon>
										<ListIcon />
									</ListItemIcon>
									<ListItemText class='nav-content'  primary='SuggestionsList' />
								</ListItem>
								</div>
							</Link>
						) : null}
					</List>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
				</main>
			</div>
		);
	})
);

export default NavBar;
