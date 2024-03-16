import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Tooltip } from '@mui/material';
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
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { menuOptions, productOptions, saleOptions } from '../../utils';
import CustomAppBar from '../shared/Navbar/CustomAppBar';

const drawerWidth = 240;

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

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<CustomAppBar isDasboard={true} open={open} setOpen={setOpen} />
			<Drawer variant="permanent" open={open}>
				<DrawerHeader className="!min-h-[80px]">
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menuOptions.map(({ text, link, icon }) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<Tooltip title={!open && text} placement="right" arrow>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}>
											{icon}
										</ListItemIcon>
									</Tooltip>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<List>
					{open && <p className="px-5 py-2">Products</p>}
					{productOptions.map(({ text, link, icon }) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<Tooltip title={!open && text} placement="right" arrow>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}>
											{icon}
										</ListItemIcon>
									</Tooltip>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
				<List>
					{open && <p className="px-5 py-2">Sales</p>}
					{saleOptions.map(({ text, link, icon }) => (
						<Link key={text} to={link}>
							<ListItem disablePadding sx={{ display: 'block' }}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<Tooltip title={!open && text} placement="right" arrow>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}>
											{icon}
										</ListItemIcon>
									</Tooltip>
									<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
								</ListItemButton>
							</ListItem>
						</Link>
					))}
				</List>
			</Drawer>
			<Box component="main" sx={{ p: 3, width: '100%' }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
