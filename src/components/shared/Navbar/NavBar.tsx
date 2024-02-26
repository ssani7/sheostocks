import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { AppBar, Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { resetUser } from '../../../redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const settings = [{ title: 'Dashboard', link: '/' }];

const NavBar = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const { profilePhoto, name, email } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

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

	return (
		<AppBar className="!shadow-md" sx={{ bgcolor: 'white', color: 'black', padding: '.5rem 0' }} position="sticky">
			<Toolbar>
				<div className="flex items-center justify-between w-full">
					<Typography variant="h6" noWrap component="div">
						<Link to={'/'}>ShoeStock.com</Link>
					</Typography>
					<Box sx={{ display: 'flex', gap: '1rem', flexGrow: 0 }}>
						<Link to={'/inventory'} className="flex items-center gap-2 cursor-pointer">
							<Typography variant="body2" fontWeight={700}>
								Inventory
							</Typography>
						</Link>
						{email ? (
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
						) : (
							<Link to={'/login'} className="flex items-center gap-2 cursor-pointer">
								<PersonIcon />
								<Typography variant="body2" fontWeight={700}>
									Sign in
								</Typography>
							</Link>
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
							onClose={handleCloseUserMenu}>
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

export default NavBar;
