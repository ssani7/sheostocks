import { useMediaQuery } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import MiniDrawer from '../components/UI/SideMenu';
import ResponsiveDrawer from '../components/UI/ResponsiveDrawer';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { useGetUserInfoQuery } from '../redux/features/user/userAPI';
import { setLoadingUser, setUser } from '../redux/features/user/userSlice';

const DashboardLayout = () => {
	const ismobile = useMediaQuery('(max-width:1280px)');
	const { pathname } = useLocation();

	const dispatch = useAppDispatch();

	const userEmail = localStorage.getItem('user-email');
	const { data, isLoading } = useGetUserInfoQuery(userEmail);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	if (isLoading) dispatch(setLoadingUser(true));
	if (data?.data) dispatch(setUser(data?.data));

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
