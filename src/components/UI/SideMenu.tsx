import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const menuOptions = [{ text: 'Dashboard', link: '/' }];
const productOptions = [
	{ text: 'All Products', link: '/products' },
	{ text: 'Add Products', link: '/products/add' },
];
const saleOptions = [
	{ text: 'Sales', link: '/sales' },
	{ text: 'Make a Sale', link: '/products/sell' },
];

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export default function MiniDrawer({ children }: { children: React.ReactNode }) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar className="!shadow-md" sx={{ bgcolor: 'white', color: 'black', padding: '.5rem 0' }} position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						ShoeStock.com
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader className="!min-h-[80px]">
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menuOptions.map(({ text, link }, index) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<List>
					{open && <p className="px-5 py-2">Products</p>}
					{productOptions.map(({ text, link }, index) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<List>
					{open && <p className="px-5 py-2">Sales</p>}
					{saleOptions.map(({ text, link }, index) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
