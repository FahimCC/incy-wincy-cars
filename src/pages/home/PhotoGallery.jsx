const PhotoGallery = () => {
	return (
		<div className='container my-20'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				Photo Gallery
			</h1>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-3  grid-flow-dense'>
				<figure className=''>
					<img
						className='h-full w-full object-fill rounded-md rounded-md'
						src='https://w0.peakpx.com/wallpaper/406/827/HD-wallpaper-bulli-on-tour-car-bus-toys-van-trip-travel-wood-holiday-vw.jpg'
						alt=''
					/>
				</figure>
				<figure className='row-span-2'>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://cutewallpaper.org/22/toy-cars-wallpapers/40000-best-small-car-photos-%C2%B7-100-free-download-%C2%B7-pexels-stock-photos.jpeg'
						alt=''
					/>
				</figure>
				<figure className='h-48 col-span-2'>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://images.unsplash.com/photo-1520575839349-52ff2532d910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMHRveXN8ZW58MHx8MHx8&w=1000&q=80'
						alt=''
					/>
				</figure>
				<figure>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://www.superiorwallpapers.com/macro/volkswagen-toy-car-macro-beautiful-wallpaper_2524x2524.jpg'
						alt=''
					/>
				</figure>
				<figure>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://wallpapercave.com/wp/wp7309131.jpg'
						alt=''
					/>
				</figure>
				<figure className='row-span-2'>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://e0.pxfuel.com/wallpapers/402/827/desktop-wallpaper-outstanding-toy-car-kids-car.jpg'
						alt=''
					/>
				</figure>
				<figure className='col-span-2'>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://c4.wallpaperflare.com/wallpaper/580/730/377/toys-car-macro-wallpaper-preview.jpg
'
						alt=''
					/>
				</figure>
				<figure className=''>
					<img
						className='h-full w-full object-fill rounded-md'
						src='https://i.pinimg.com/736x/4f/c6/0f/4fc60f9c36fa6449f2f980d9d4c1f30a.jpg
'
						alt=''
					/>
				</figure>
			</div>
		</div>
	);
};

export default PhotoGallery;
