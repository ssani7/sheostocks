import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './layouts/MainPage';
import { useGetUserInfoQuery } from './redux/features/user/userAPI';
import { setUser } from './redux/features/user/userSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
	const dispatch = useAppDispatch();

	const userEmail = localStorage.getItem('userEmail');
	const { data } = useGetUserInfoQuery(userEmail);

	if (data?.data) dispatch(setUser(data?.data));

	return (
		<div>
			<MainPage />
			<ToastContainer
				position="bottom-right"
				// // autoClose={3000}
				// hideProgressBar={false}
				// newestOnTop={false}
				// closeOnClick
				// rtl={false}
				// pauseOnFocusLoss
				// // draggable
				// pauseOnHover
				// theme="light"
				// transition="Bounce"
			/>
		</div>
	);
}

export default App;
