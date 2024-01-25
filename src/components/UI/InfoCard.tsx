import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

type InfoCardProps = {
	icon: ReactNode;
	title: string;
	value: number | string;
};

const InfoCard = ({ icon, title, value }: InfoCardProps) => {
	const USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<Card className="flex items-center justify-between px-5 py-3 lg:min-w-72 w-full !shadow-sm">
			{icon}
			<CardContent className="w-fit text-end">
				<Typography gutterBottom variant="body1">
					{title}
				</Typography>
				<Typography fontWeight={600} variant="h5" color="black">
					{USDollar.format(Number(value))}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default InfoCard;
