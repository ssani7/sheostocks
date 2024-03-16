import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, IconButton, Menu, MenuItem, Skeleton, Tooltip, useMediaQuery } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { resetUser } from '../../../redux/features/user/userSlice';
import { Link } from 'react-router-dom';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const drawerWidth = 240;

const settings = [{ title: 'Dashboard', link: '/' }];

type CustomAppBarProps = {
	open?: boolean;
	setOpen?: (_open: boolean) => void;
	isDasboard?: boolean;
};

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
		width: '100%',
		[theme.breakpoints.up('lg')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const CustomAppBar = ({ setOpen, open, isDasboard }: CustomAppBarProps) => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const { profilePhoto, name, email, isAdmin, loadingUser } = useAppSelector((state) => state.user);

	const dispatch = useAppDispatch();

	const toggleDrawer = () => {
		setOpen?.(!open);
	};

	// const handleDrawerClose = () => {
	// 	setOpen?.(false);
	// };

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		handleCloseUserMenu();
		localStorage.removeItem('user-auth');
		localStorage.removeItem('user-email');
		dispatch(resetUser());
		window.location.href = '/';
	};

	const ismobile = useMediaQuery('(max-width:1280px)');

	return (
		<AppBar className="" sx={{ bgcolor: 'white', color: 'black', padding: '.5rem 0', boxShadow: 'none' }} position="fixed" open={open}>
			<Toolbar>
				{isDasboard && (
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && !ismobile && { display: 'none' }),
						}}>
						<MenuIcon />
					</IconButton>
				)}
				<div className="flex items-center justify-between w-full">
					<Typography variant="h6" noWrap component="div">
						<Link to={'/'}>ShoeStock.com</Link>
					</Typography>
					<Box sx={{ display: 'flex', gap: '1.5rem', flexGrow: 0 }}>
						{isAdmin && (
							<Link to={'/inventory'} className="flex items-center gap-2 cursor-pointer">
								<Typography variant="body2" fontWeight={700}>
									Inventory
								</Typography>
							</Link>
						)}
						{loadingUser ? (
							<Skeleton variant="circular" width={40} height={40} />
						) : (
							<>
								{email ? (
									<div className="flex items-center gap-3">
										<Tooltip title="Open settings">
											<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
												{/* <SettingsRoundedIcon className="bg-[#6466e9] text-white p-2 rounded-lg !h-10 !w-10 ml-3" /> */}
												<Avatar alt="" src={profilePhoto || '/user.jpg'} />
											</IconButton>
										</Tooltip>
									</div>
								) : (
									<Link to={'/login'} className="flex items-center gap-2 cursor-pointer">
										<PersonIcon />
										<Typography variant="body2" fontWeight={700}>
											Sign in
										</Typography>
									</Link>
								)}
							</>
						)}

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
							onClick={handleCloseUserMenu}
							onClose={handleCloseUserMenu}>
							<MenuItem sx={{ paddingY: 2 }}>
								<Link className="flex gap-3 items-center" to={`/profile/${email}`}>
									<Avatar alt="" src={profilePhoto || '/user.jpg'} />

									<div>
										<p className="font-bold">{name || 'Anonymous User'}</p>
										<p className="text-sm">Admin</p>
									</div>
								</Link>
							</MenuItem>
							{settings.map((setting) => (
								<MenuItem key={setting.title} onClick={handleCloseUserMenu}>
									<Link to={setting.link}>
										<Typography textAlign="center">{setting.title}</Typography>
									</Link>
								</MenuItem>
							))}
							<MenuItem onClick={handleLogout}>
								<Typography textAlign="center">Log Out</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default CustomAppBar;
