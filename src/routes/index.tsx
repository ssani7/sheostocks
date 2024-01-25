import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../page/Dashboard';
import Login from '../page/Login';
import Products from '../page/Products';
import Sales from '../page/Sales';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'sales',
				element: <Sales />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
