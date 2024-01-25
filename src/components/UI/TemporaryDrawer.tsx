import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Products from '@mui/icons-material/Inventory2Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';
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

export default function ResponsiveDrawer(props: Props) {
	// const { window } = props;
	const [open, setOpen] = React.useState(false);
	// const [isClosing, setIsClosing] = React.useState(false);

	const handleDrawerClose = () => {
		// setIsClosing(true);
		setOpen(false);
	};

	const handleDrawerToggle = () => {
		// if (!isClosing) {
		// }
		setOpen(!open);
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

	// Remove this const when copying and pasting into your project.
	// const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar className="!shadow-md" sx={{ bgcolor: 'white', color: 'black', padding: '.5rem 0' }} position="fixed">
				<Toolbar>
					<IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						ShoeStock.com
					</Typography>
				</Toolbar>
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
