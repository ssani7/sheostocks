import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from 'react-router-dom';

const PathBreadcrumb = () => {
	const location = useLocation();
	const paths = location.pathname.split('/');
	return (
		<Breadcrumbs aria-label="breadcrumb">
			<Link className="hover:underline" to="/">
				Home
			</Link>
			{paths?.map((path) => {
				const pathArray = paths.slice(1, paths.indexOf(path) + 1);
				const url = pathArray.join('/');
				if (!url) return;

				return (
					<Link className="hover:underline" to={`/${url}`}>
						{path}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export default PathBreadcrumb;
