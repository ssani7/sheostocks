import { Outlet } from 'react-router-dom';
import MiniDrawer from '../components/UI/SideMenu';

const MainPage = () => {
	return (
		<div>
			<nav>Navbar</nav>
			<MiniDrawer>
				<Outlet />
			</MiniDrawer>
		</div>
	);
};

export default MainPage;
