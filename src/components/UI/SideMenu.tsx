import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
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
import { useAppSelector } from '../../redux/hooks';

const drawerWidth = 240;

const menuOptions = [{ text: 'Dashboard', link: '/', icon: <DashboardOutlinedIcon /> }];
const productOptions = [
	{ text: 'All Products', link: '/products', icon: <Products /> },
	{ text: 'Add Products', link: '/products/add', icon: <AddBoxOutlinedIcon /> },
];
const saleOptions = [
	{ text: 'Sales', link: '/sales', icon: <SalesIcon /> },
	{ text: 'Make a Sale', link: '/products/sell', icon: <SellOutlinedIcon /> },
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

const settings = [
	{ title: 'Dashboard', link: '/' },
	{ title: 'Logout', link: '/login' },
];

export default function MiniDrawer({ children }: { children: React.ReactNode }) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const { profilePhoto, name } = useAppSelector((state) => state.user);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
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
					<div className="flex items-center justify-between w-full">
						<Typography variant="h6" noWrap component="div">
							<Link to={'/'}>ShoeStock.com</Link>
						</Typography>
						<Box sx={{ flexGrow: 0 }}>
							<div className="flex items-center gap-3">
								<Avatar alt="" src={profilePhoto || '/user.jpg'} />

								<div>
									<p className="font-bold">{name || 'Anonymous User'}</p>
									<p className="text-sm">Admin</p>
								</div>
								<Tooltip title="Open settings">
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<SettingsRoundedIcon className="bg-[#6466e9] text-white p-2 rounded-lg !h-10 !w-10 ml-3" />
									</IconButton>
								</Tooltip>
							</div>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								{settings.map((setting) => (
									<MenuItem key={setting.title} onClick={handleCloseUserMenu}>
										<Link to={setting.link}>
											<Typography textAlign="center">{setting.title}</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</div>
				</Toolbar>
			</AppBar>
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
