const NewArrivalProduct = () => {
	return (
		<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg p-5 border-2 hover:border-double'>
			<figure>
				<img
					className='w-full h-full object-cover p-10'
					src='https://m.media-amazon.com/images/I/51PIDjrSzXL._AC_SX679_.jpg'
				/>
			</figure>
			<h2 className='text-2xl'>Fire Truck</h2>
			<p className='text-lg text-[#6930C3]'>$50.00</p>
		</div>
	);
};

export default NewArrivalProduct;
