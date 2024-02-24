import { useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MiniDrawer from '../components/UI/SideMenu';
import ResponsiveDrawer from '../components/UI/TemporaryDrawer';

const DashboardLayout = () => {
	const ismobile = useMediaQuery('(max-width:730px)');
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
