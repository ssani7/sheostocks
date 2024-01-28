import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './layouts/MainPage';

function App() {
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
