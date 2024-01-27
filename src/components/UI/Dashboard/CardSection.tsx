import PurchaseIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StockIcon from '@mui/icons-material/Inventory2Outlined';
import ProfitIcon from '@mui/icons-material/MonetizationOnOutlined';
import SalesIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Card, CardContent, Skeleton } from '@mui/material';
import { useGetCardInfoQuery } from '../../../redux/api/dashboardInfoApi';
import InfoCard from '../Dashboard/InfoCard';

const CardSection = () => {
	const { data, isLoading } = useGetCardInfoQuery('', { pollingInterval: 30000, refetchOnMountOrArgChange: true });

	const totalSale = data?.data?.totalSale || 0;
	const currentStock = data?.data?.currentStock || 0;
	const totalPurchase = data?.data?.totalPurchase || 0;

	const profit = totalSale - totalPurchase;

	return (
		<div className="w-full">
			{isLoading ? (
				<div className="grid grid-cols-2 gap-6 xl:grid-cols-4 pt-2">
					{[1, 2, 3, 4].map(() => (
						<Card className="flex items-center justify-between px-5 py-3 lg:min-w-72 h-28 w-full !shadow-sm">
							<Skeleton variant="circular" width={50} height={50} />
							<CardContent className="w-full flex flex-col items-end text-end">
								<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
								<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="grid grid-cols-2 gap-6 xl:grid-cols-4 pt-2">
					<InfoCard icon={<SalesIcon htmlColor="#6466e9" className="!text-5xl" />} title="Sales" value={totalSale || 0} />
					<InfoCard icon={<PurchaseIcon htmlColor="#6466e9" className="!text-5xl" />} title="Purchase" value={totalPurchase || 0} />
					<InfoCard icon={<ProfitIcon htmlColor="#6466e9" className="!text-5xl" />} title="Profit this month" value={profit || 0} />
					<InfoCard icon={<StockIcon htmlColor="#6466e9" className="!text-5xl" />} title="Current Stock" isNum={true} value={currentStock || 0} />
				</div>
			)}
		</div>
	);
};

export default CardSection;
