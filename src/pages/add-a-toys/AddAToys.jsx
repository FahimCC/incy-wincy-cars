import { useForm } from 'react-hook-form';

const AddAToys = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<div className='container my-20 '>
			<div className='border-2 border-secondary p-5 md:p-10 rounded-lg'>
				<h2 className='text-center text-xl md:text-3xl font-medium mb-8 underline'>
					Add Toy
				</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Toy photo URL'
							className='input'
							{...register('Toy photo URL', { required: true })}
						/>
						<input
							type='text'
							placeholder='Toy Name'
							className='input'
							{...register('Toy Name', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Seller Name'
							className='input'
							{...register('Seller Name', { required: true })}
						/>
						<input
							type='email'
							placeholder='Seller Email'
							className='input'
							{...register('Seller Email', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Sub-category'
							className='input'
							{...register('Sub-category', { required: true })}
						/>
						<input
							type='text'
							placeholder='price'
							className='input'
							{...register('price', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Ratings'
							className='input'
							{...register('Ratings', { required: true })}
						/>
						<input
							type='text'
							placeholder='Available Quantity'
							className='input'
							{...register('Available Quantity', { required: true })}
						/>
					</div>
					<textarea
						placeholder='Details Description'
						className='px-3 py-2 border-2 border-primary rounded-lg outline-none focus:border-secondary w-full'
						{...register('Details Description', { required: true })}
					/>

					<input
						className='bttn squeeze btn-block text-lg'
						value='Add Toy'
						type='submit'
					/>
				</form>
			</div>
		</div>
	);
};

export default AddAToys;
