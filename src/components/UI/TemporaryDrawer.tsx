import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const drawerWidth = 240;

interface Props {
	children: React.ReactNode;
	window?: () => Window;
}

const menuOptions = [{ text: 'Dashboard', link: '/', icon: <DashboardOutlinedIcon /> }];
const productOptions = [
	{ text: 'All Products', link: '/products', icon: <Products /> },
	{ text: 'Add Products', link: '/products/add', icon: <AddBoxOutlinedIcon /> },
];
const saleOptions = [
	{ text: 'Sales', link: '/sales', icon: <SalesIcon /> },
	{ text: 'Make a Sale', link: '/products/sell', icon: <SellOutlinedIcon /> },
];

const settings = [
	{ title: 'Dashboard', link: '/' },
	{ title: 'Logout', link: '/login' },
];

export default function ResponsiveDrawer(props: Props) {
	// const { window } = props;
	const [open, setOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const { profilePhoto, name } = useAppSelector((state) => state.user);

	const handleDrawerClose = () => {
		// setIsClosing(true);
		setOpen(false);
	};

	const handleDrawerToggle = () => {
		// if (!isClosing) {
		// }
		setOpen(!open);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{menuOptions.map(({ text, link, icon }) => (
					<Link key={text} to={link}>
						<ListItem onClick={handleDrawerToggle} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: 'initial',
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}>
									{icon}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				<p className="px-5 py-2">Products</p>
				{productOptions.map(({ text, link, icon }) => (
					<Link key={text} to={link}>
						<ListItem onClick={handleDrawerToggle} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: 'initial',
									px: 2.5,
								}}>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: 3,
										justifyContent: 'center',
									}}>
									{icon}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: 1 }} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				<p className="px-5 py-2">Sales</p>
				{saleOptions.map(({ text, link, icon }) => (
					<Link key={text} to={link}>
						<ListItem onClick={handleDrawerToggle} disablePadding sx={{ display: 'block' }}>
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
									{icon}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar className="!shadow-md" sx={{ bgcolor: 'white', color: 'black', padding: '.5rem 1rem' }} position="fixed">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center">
						<IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							<Link to={'/'}>ShoeStock.com</Link>
						</Typography>
					</div>
					<Box sx={{ flexGrow: 0 }}>
						<div className="flex items-center gap-3">
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="" src={profilePhoto || '/user.jpg'} />
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
							<div className="px-5 py-3">
								<p className="font-bold break-before-all">{name || 'Anonymous User'}</p>
								<p className="text-sm">Admin</p>
							</div>
							<Divider className="mx-2" />
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
			</AppBar>
			<Box component="nav" sx={{ flexShrink: { sm: 0 } }} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					// container={container}
					variant="temporary"
					open={open}
					// onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					// ModalProps={{
					// 	keepMounted: true, // Better open performance on mobile.
					// }}
					sx={{
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3, width: '100%' }}>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}
