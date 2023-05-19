const ViewToy = () => {
	return (
		<div className='container my-20'>
			<div className='card lg:card-side bg-base-100 border-2 border-primary shadow-xl'>
				<div className=' flex justify-center'>
					<figure className='w-48 md:w-60 lg:w-72 lg:p-10'>
						<img
							className='w-full'
							src='https://m.media-amazon.com/images/I/71HA0rWAjOL._AC_UF1000,1000_QL80_.jpg'
							alt='Album'
						/>
					</figure>
				</div>
				<div className='divider lg:divider-horizontal'></div>
				<div className='card-body '>
					<h2 className='text-3xl font-medium'>Fire Truck</h2>
					<p>
						<b>Seller Name:</b> Fahim Faysal
					</p>
					<p>
						<b>Seller Email:</b> Fahim Faysal
					</p>
					<p>
						<b>Available Quantity:</b> 400
					</p>
					<p>
						<b>Details Description:</b> Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Ad, rem. Dignissimos officiis ratione fuga sequi
						voluptate quae, odio impedit optio omnis placeat quo numquam animi!
						Quae laborum tenetur earum possimus!
					</p>
					<div className='card-actions justify-end'>
						<p className='text-xl'>
							<b>Price:</b> $200
						</p>
						<p>
							<b>Ratings:</b> 4.5
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewToy;
