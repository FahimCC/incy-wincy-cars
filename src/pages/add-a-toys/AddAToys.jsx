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
			<div className='border-4 hover:border-double border-secondary p-5 md:p-10 rounded-lg'>
				<h1 className='clip text-center font-medium text-3xl lg:text-5xl  mb-10'>
					Add Toy
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Toy photo URL'
							className='insert'
							{...register('Toy photo URL', { required: true })}
						/>
						<input
							type='text'
							placeholder='Toy Name'
							className='insert'
							{...register('Toy Name', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Seller Name'
							className='insert'
							{...register('Seller Name', { required: true })}
						/>
						<input
							type='email'
							placeholder='Seller Email'
							className='insert'
							{...register('Seller Email', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Sub-category'
							className='insert'
							{...register('Sub-category', { required: true })}
						/>
						<input
							type='text'
							placeholder='price'
							className='insert'
							{...register('price', { required: true })}
						/>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<input
							type='text'
							placeholder='Ratings'
							className='insert'
							{...register('Ratings', { required: true })}
						/>
						<input
							type='text'
							placeholder='Available Quantity'
							className='insert'
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
