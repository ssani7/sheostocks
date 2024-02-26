import { Divider, Typography } from '@mui/material';
import PathBreadcrumb from './PathBreadcrumb';

const PageTitle = ({ title }: { title: string }) => {
	return (
		<div>
			<div className="flex justify-between items-center py-5">
				<Typography variant="h5" fontWeight={700}>
					{title}
				</Typography>
				<PathBreadcrumb />
			</div>
			<Divider />
		</div>
	);
};

export default PageTitle;
