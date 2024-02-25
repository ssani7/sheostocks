import CloudUpload from '@mui/icons-material/CloudUploadOutlined';
import { Backdrop, Button, CircularProgress, OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { useUpdateProductMutation } from '../../redux/features/products/productsAPI';
import { useMakePurchaseMutation } from '../../redux/features/purchase/purchaseAPI';
import { resetProduct, setProduct } from '../../redux/features/purchase/purchaseSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const productData = [
	{ title: 'Product Name', placeholder: 'Enter Product Name', name: 'name' },
	{ title: 'Brand', placeholder: 'Enter brand name', name: 'brand' },
	{ title: 'Model', placeholder: 'Enter Model name', name: 'model' },
	{ title: 'Category', placeholder: 'Choose a category', name: 'style' },
	{ title: 'Price', placeholder: 'Enter Product Price', name: 'price', isNum: true },
	{ title: 'Quantity', placeholder: 'Enter Product Quantity', name: 'quantity', isNum: true },
	{ title: 'Stock Alert', placeholder: '0', name: 'stock_alert', isNum: true },
	{ title: 'Size', placeholder: 'Choose product size', name: 'size' },
	{ title: 'Color', placeholder: 'Enter color', name: 'color' },
	{ title: 'Material', placeholder: 'Enter material', name: 'material' },
];

const ProductForm = ({ isUpdate }: { isUpdate?: boolean }) => {
	const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
	const [loadingReq, setLoadingReq] = useState<boolean>(false);

	const onDrop = useCallback((acceptedFiles: Array<File>) => {
		const reader = new FileReader();

		reader.onload = () => {
			const binaryStr = reader.result;
			setPreview(binaryStr);
		};
		reader.readAsDataURL(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

	const dispatch = useAppDispatch();
	const [makePurchase, { isLoading, isSuccess, isError, error, reset }] = useMakePurchaseMutation();
	const [updateProduct, { isLoading: isUpdating, isSuccess: isUpdateSuccess, isError: isUpateError, error: updateError, reset: resetUpdate }] = useUpdateProductMutation();

	if (isSuccess || isUpdateSuccess) {
		if (!isUpdate) {
			dispatch(resetProduct());
			setPreview(null);
		}
		reset();
		resetUpdate();
		toast.success(isUpdate ? 'Product updated successfully' : 'Purchase made successfully');
		setLoadingReq(false);
	}
	if (isError || isUpateError) {
		reset();
		resetUpdate();
		const errorMessage = isError ? (error as any).data?.message : (updateError as any).data?.message;
		toast.error(errorMessage);
		setLoadingReq(false);
	}

	const purchaseData: any = useAppSelector((state) => state.purchase);

	async function uploadPhoto() {
		const formData = new FormData();

		formData.append('file', acceptedFiles[0]);
		formData.append('upload_preset', 'shoe_stocks');
		formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

		const results = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
			method: 'POST',
			body: formData,
		}).then((r) => r.json());

		if (!results?.url) {
			toast.error('Image upload failed. Please try reloading the page');
			setLoadingReq(false);
			return;
		}

		return results.url;
	}

	async function handleOnSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		setLoadingReq(true);

		if (typeof acceptedFiles[0] === 'undefined' && !purchaseData?.image) return;

		try {
			let imageURL = purchaseData.image;

			if (preview) imageURL = await uploadPhoto();

			dispatch(setProduct({ image: imageURL }));

			if (isUpdate) await updateProduct({ productData: { ...purchaseData, image: imageURL } });
			else await makePurchase({ purchaseData: { ...purchaseData, image: imageURL } });
		} catch (error) {
			console.error(error);
			toast.error('Something went wrong. Please try reloading the page');
			setLoadingReq(false);
		}
	}

	return (
		<div>
			<div className="flex flex-col xl:flex-row gap-6">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 xl:w-[75%]">
					{productData.map((p) => (
						<div key={p.title}>
							<p className="mb-2 text-sm">{p.title}</p>
							<OutlinedInput
								type={p.isNum ? 'number' : 'text'}
								value={purchaseData[p.name] || ''}
								onChange={(e) => dispatch(setProduct({ [p.name]: e.target.value }))}
								placeholder={p.placeholder}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
					))}
				</div>
				<div className="xl:w-[20%] mt-6">
					<p className="mb-2">Add Image to Product</p>
					<div className="bg-white rounded-lg p-6">
						<div {...getRootProps()}>
							<input {...getInputProps()} />

							<div className={`${isDragActive && 'bg-[#6466e9] !text-white'} border rounded-lg px-8 py-8 flex flex-col gap-2 items-center justify-center cursor-pointer`}>
								<CloudUpload sx={{ height: 80, width: 80 }} />
								<p className="text-center">Drag and Drop image here or</p>
								<p className={`${isDragActive ? 'text-white' : 'text-[#6466e9]'} font-semibold`}>Select</p>
							</div>
						</div>

						{(preview || purchaseData.image) && (
							<div className="mt-6 h-fit w-full mx-auto p-2 rounded-lg bg-white">
								<img className="w-full h-full object-contain my-auto rounded-lg" src={(preview as string) || purchaseData.image} alt="Upload preview" />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="my-6">
				<p className="mb-2 text-sm">Description</p>
				<OutlinedInput
					multiline
					placeholder="Add a note"
					rows={6}
					sx={{
						'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
					}}
					className="w-full bg-white border-0"
				/>
			</div>
			<Button onClick={handleOnSubmit} sx={{ bgcolor: '#6466e9', fontWeight: 600, '&:hover': { bgcolor: '#6466e9' } }} variant="contained">
				{isUpdate ? 'Update' : 'Add Product'}
			</Button>

			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading || isUpdating || loadingReq}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default ProductForm;
