import { CircularProgress, Divider, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../redux/features/user/userAPI';

const RegisterForm = () => {
	const [error, setError] = useState<string>('');

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confrmPass, setConfrmPass] = useState<string>('');

	const [registerUser, { isSuccess, isLoading, isError, error: registerError, reset, data }] = useRegisterUserMutation();
	const navigate = useNavigate();

	if (isSuccess) {
		localStorage.setItem('user-auth', data?.token);
		navigate('/');
	}

	const handleSignUp = async () => {
		reset();
		if (password !== confrmPass) return setError('nomatch');
		try {
			const userData = { email, password };
			await registerUser({ userData });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-[90%] lg:w-1/2 bg-white px-10">
			<p className="text-2xl font-medium py-6 text-center">ShoeStocks.com</p>
			<Divider />
			<div className="pb-10">
				<p className="text-center text-lg pt-5">Sign Up</p>
				<div className="mt-6">
					<p className="mb-2 text-sm">Email Address</p>
					<OutlinedInput
						value={email}
						type="email"
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
						onChange={(e) => {
							setPassword(e.target.value);
							setError('');
						}}
						type="password"
						placeholder="Enter Pasword"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
				</div>
				<div className="mt-6">
					<p className="mb-2 text-sm">Confirm Password</p>
					<OutlinedInput
						value={confrmPass}
						onChange={(e) => {
							setConfrmPass(e.target.value);
							setError('');
						}}
						type="password"
						placeholder="Enter Pasword"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
					{error === 'nomatch' && <p className="text-sm text-center mt-2 text-red-600">The passwords do not match</p>}
					{isError && <p className="text-sm text-center mt-2 text-red-600 ">{(registerError as any)?.data?.message}</p>}
				</div>

				<p className="text-sm font-light text-center mt-5">
					Already have an account?{' '}
					<Link className="hover:underline ml-1" to={'/login'}>
						Login
					</Link>
				</p>

				<button onClick={handleSignUp} className="bg-[#6366f1] text-white px-6 py-4 w-full mt-6 rounded-sm">
					{isLoading ? <CircularProgress sx={{ color: 'white' }} size="sm" /> : 'Sign Up '}
				</button>
			</div>
		</div>
	);
};

export default RegisterForm;
