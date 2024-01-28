import CloudUpload from '@mui/icons-material/CloudUploadOutlined';
import { Button, OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const productData = [
	{ title: 'Product Name', placeholder: 'Enter Product Name' },
	{ title: 'Brand', placeholder: 'Enter brand name' },
	{ title: 'Category', placeholder: 'Choose a category' },
	{ title: 'Price', placeholder: 'Enter Product Price' },
	{ title: 'Quantity', placeholder: 'Enter Product Quantity' },
	{ title: 'Stock Alert', placeholder: '0' },
	{ title: 'Size', placeholder: 'Choose product size' },
	{ title: 'Color', placeholder: 'Enter color' },
];

const ProductForm = () => {
	const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

	const onDrop = useCallback((acceptedFiles: Array<File>) => {
		const reader = new FileReader();

		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		reader.onload = () => {
			const binaryStr = reader.result;
			setPreview(binaryStr);
		};
		reader.readAsDataURL(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div>
			<div className="flex flex-col xl:flex-row gap-6">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 xl:w-[75%]">
					{productData.map((p) => (
						<div key={p.title}>
							<p className="mb-2 text-sm">{p.title}</p>
							<OutlinedInput
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

							<div className={`${isDragActive && 'bg-[#6466e9] !text-white'} border rounded-lg px-8 py-8 flex flex-col gap-2 items-center justify-center`}>
								<CloudUpload sx={{ height: 80, width: 80 }} />
								<p>Drag and Drop image here or</p>
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
			<Button sx={{ bgcolor: '#6466e9', fontWeight: 600, '&:hover': { bgcolor: '#6466e9' } }} variant="contained">
				Add Product
			</Button>
		</div>
	);
};

export default ProductForm;
