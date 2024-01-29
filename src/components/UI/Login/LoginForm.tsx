import { CircularProgress, Divider, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../redux/features/user/userAPI';

const LoginForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [loginUser, { isSuccess, isLoading, isError, error, data }] = useLoginUserMutation();
	const errorMessage = (error as any)?.data?.message || '';
	const navigate = useNavigate();

	if (isSuccess) {
		localStorage.setItem('user-auth', data?.data?.token);
		navigate('/');
	}

	const handleLogin = async () => {
		try {
			const userData = { email, password };
			await loginUser({ userData });
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="lg:w-1/2 bg-white px-10">
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

				<button onClick={handleLogin} className="bg-[#6366f1] text-white px-6 py-4 w-full mt-6 rounded-sm">
					{isLoading ? <CircularProgress sx={{ color: 'white' }} size="sm" /> : 'Login'}
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
