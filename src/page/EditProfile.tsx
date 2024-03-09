/* eslint-disable @typescript-eslint/no-unused-vars */
import CloudUpload from '@mui/icons-material/CloudUploadOutlined';
import { Backdrop, Button, CircularProgress, Container, OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAppSelector } from '../redux/hooks';

const EditProfile = ({ isUpdate }: { isUpdate?: boolean }) => {
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

	// const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	// const dispatch = useAppDispatch();

	const { name, email, address, city, phone } = useAppSelector((state) => state.user);

	// if (isSuccess) {
	// 	if (!isUpdate) {
	// 		dispatch(resetProduct());
	// 		setPreview(null);
	// 	}
	// 	reset();
	// 	toast.success(isUpdate ? 'Product updated successfully' : 'Purchase made successfully');
	// 	setLoadingReq(false);
	// }
	// if (isError) {
	// 	reset();
	// 	const errorMessage = isError ? (error as any).data?.message : (updateError as any).data?.message;
	// 	toast.error(errorMessage);
	// 	setLoadingReq(false);
	// }

	// async function uploadPhoto() {
	// 	const formData = new FormData();

	// 	formData.append('file', acceptedFiles[0]);
	// 	formData.append('upload_preset', 'shoe_stocks');
	// 	formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

	// 	const results = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
	// 		method: 'POST',
	// 		body: formData,
	// 	}).then((r) => r.json());

	// 	if (!results?.url) {
	// 		toast.error('Image upload failed. Please try reloading the page');
	// 		setLoadingReq(false);
	// 		return;
	// 	}

	// 	return results.url;
	// }

	async function handleOnSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		setLoadingReq(true);

		// if (typeof acceptedFiles[0] === 'undefined' && !purchaseData?.image) return;

		// try {
		// 	let imageURL = purchaseData.image;

		// 	if (preview) imageURL = await uploadPhoto();

		// 	dispatch(setProduct({ image: imageURL }));

		// 	if (isUpdate) await updateProduct({ productData: { ...purchaseData, image: imageURL } });
		// 	else await makePurchase({ purchaseData: { ...purchaseData, image: imageURL } });
		// } catch (error) {
		// 	console.error(error);
		// 	toast.error('Something went wrong. Please try reloading the page');
		// 	setLoadingReq(false);
		// }
	}

	return (
		<Container sx={{ padding: 4 }} maxWidth="xl">
			<div className="flex flex-col xl:flex-row gap-6">
				<div className="xl:w-[20%] mt-6">
					<p className="mb-2">Add Your Profile Photo</p>
					<div className="bg-white rounded-lg p-6">
						<div {...getRootProps()}>
							<input {...getInputProps()} />

							<div className={`${isDragActive && 'bg-[#6466e9] !text-white'} border rounded-lg px-8 py-8 flex flex-col gap-2 items-center justify-center cursor-pointer`}>
								<CloudUpload sx={{ height: 80, width: 80 }} />
								<p className="text-center">Drag and Drop image here or</p>
								<p className={`${isDragActive ? 'text-white' : 'text-[#6466e9]'} font-semibold`}>Select</p>
							</div>
						</div>

						{preview && (
							<div className="mt-6 h-fit w-full mx-auto p-2 rounded-lg bg-white">
								<img className="w-full h-full object-contain my-auto rounded-lg" src={preview as string} alt="Upload preview" />
							</div>
						)}
					</div>
				</div>
				<div className="mt-6 xl:w-[75%]">
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
						<div>
							<p className="mb-2 text-sm">Name</p>
							<OutlinedInput
								type={'text'}
								defaultValue={name}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
						<div>
							<p className="mb-2 text-sm">Email</p>
							<OutlinedInput
								type={'text'}
								defaultValue={email}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
						<div>
							<p className="mb-2 text-sm">Address</p>
							<OutlinedInput
								type={'text'}
								defaultValue={address}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
						<div>
							<p className="mb-2 text-sm">City</p>
							<OutlinedInput
								type={'text'}
								defaultValue={city}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
						<div>
							<p className="mb-2 text-sm">Phone</p>
							<OutlinedInput
								type={'text'}
								defaultValue={phone}
								sx={{
									'& .MuiOutlinedInput-notchedOutline': { border: 'white' },
								}}
								className="w-full bg-white border-0"
							/>
						</div>
					</div>
					<div className="w-full flex justify-end">
						<Button onClick={handleOnSubmit} sx={{ marginTop: 3, bgcolor: '#6466e9', fontWeight: 600, '&:hover': { bgcolor: '#6466e9' } }} variant="contained">
							{isUpdate ? 'Update' : 'Add Product'}
						</Button>
					</div>
				</div>
			</div>

			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loadingReq}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Container>
	);
};

export default EditProfile;
