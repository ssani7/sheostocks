import RegisterForm from '../components/UI/Login/RegisterForm';

const Register = () => {
	return (
		<div className="h-full">
			<div className="absolute h-full w-1/2 left-0 top-0 bottom-0 right-[50%]">
				<img className="object-cover h-full w-full" src="/login-bg.d2033fd9.webp" alt="" />
			</div>
			<div className="w-1/2 h-screen ml-auto my-auto flex flex-col justify-center items-center">
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
