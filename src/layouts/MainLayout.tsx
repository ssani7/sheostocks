import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/shared/Navbar/NavBar';
import { useGetUserInfoQuery } from '../redux/features/user/userAPI';
import { setUser } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/hooks';

const MainLayout = () => {
	const dispatch = useAppDispatch();

	const userEmail = localStorage.getItem('user-email');
	const { data } = useGetUserInfoQuery(userEmail);

	// if (isError) {
	// 	localStorage.removeItem('user-email');
	// 	localStorage.removeItem('user-auth');
	// }

	if (data?.data) dispatch(setUser(data?.data));

	return (
		<div>
			<NavBar />
			<Outlet />
			<ToastContainer position="bottom-right" closeOnClick />
		</div>
	);
};

export default MainLayout;
