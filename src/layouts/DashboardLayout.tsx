import { useMediaQuery } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import MiniDrawer from '../components/UI/SideMenu';
import ResponsiveDrawer from '../components/UI/TemporaryDrawer';
import { useEffect } from 'react';

const DashboardLayout = () => {
	const ismobile = useMediaQuery('(max-width:730px)');
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div>
			{ismobile ? (
				<ResponsiveDrawer>
					<Outlet />
				</ResponsiveDrawer>
			) : (
				<MiniDrawer>
					<Outlet />
				</MiniDrawer>
			)}
		</div>
	);
};

export default DashboardLayout;
