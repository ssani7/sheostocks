import { Divider, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginUserMutation } from '../../../redux/features/user/userAPI';
import { setUser } from '../../../redux/features/user/userSlice';
import { useAppDispatch } from '../../../redux/hooks';
import FullScreenLoader from '../FullScreenLoader';

const LoginForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [loginUser, { isSuccess, isLoading, isError, error, data }] = useLoginUserMutation();
	const errorMessage = (error as any)?.data?.message || '';
	// const navigate = useNavigate();

	const dispatch = useAppDispatch();

	if (isSuccess) {
		localStorage.setItem('user-email', email);
		localStorage.setItem('user-auth', data?.data?.token);
		dispatch(setUser(data?.data.user));
		window.location.href = '/';
	}

	const handleLogin = async () => {
		try {
			const userData = { email, password };
			await loginUser({ userData });
		} catch (error) {
			console.log(error);
		}
	};

	const setAdminCredentials = async () => {
		setEmail('admin@gmail.com');
		setPassword('123456');

		const userData = { email: 'admin@gmail.com', password: '123456' };
		await loginUser({ userData });
	};

	const setUserCredentials = async () => {
		setEmail('user@gmail.com');
		setPassword('123456');

		const userData = { email: 'user@gmail.com', password: '123456' };
		await loginUser({ userData });
	};
	return (
		<div className="w-1/2 lg:w-3/4 bg-white px-10">
			<p className="text-2xl font-medium py-6 text-center">ShoeStocks.com</p>
			<Divider />
			<div className="pb-10">
				<p className="text-center text-lg pt-5">Login</p>
				<div className="mt-6">
					<p className="mb-2 text-sm">Email Address</p>
					<OutlinedInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="admin@gmail.com"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
				</div>
				<div className="mt-6">
					<p className="mb-2 text-sm">Password</p>
					<OutlinedInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Enter Pasword"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
				</div>

				{isError && <p className="text-sm text-center mt-2 text-red-600">{JSON.stringify(errorMessage) || 'Something went wrong'}</p>}

				<p className="text-sm font-light text-center mt-5">
					Don’t have an account?{' '}
					<Link className="hover:underline ml-1" to={'/register'}>
						Sign Up
					</Link>
				</p>

				<button onClick={handleLogin} className="primary-btn w-full mt-6">
					Login
				</button>

				<div className="flex flex-col md:flex-row items-center mt-6 justify-center gap-5">
					<button onClick={setAdminCredentials} className="primary-btn w-full">
						Login as Admin
					</button>
					<button onClick={setUserCredentials} className="primary-btn w-full">
						Login as User
					</button>
				</div>
			</div>

			<FullScreenLoader open={isLoading} />
		</div>
	);
};

export default LoginForm;
