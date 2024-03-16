import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { menuOptions, productOptions, saleOptions } from '../../utils';
import CustomAppBar from '../shared/Navbar/CustomAppBar';

const drawerWidth = 240;

interface Props {
	children: React.ReactNode;
	window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
	// const { window } = props;
	const [open, setOpen] = React.useState(false);

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
			<List sx={{ paddingTop: 3 }}>
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
			<CustomAppBar isDasboard={true} open={open} setOpen={setOpen} />
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
