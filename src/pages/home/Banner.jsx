/* eslint-disable react/no-unescaped-entities */
import background from '../../assets/car-background.mp4';

const Banner = () => {
	return (
		<>
			<div className='relative flex items-center justify-center h-fit overflow-hidden '>
				<div className='relative z-30 p-5 w-full h-fit text-white bg-opacity-50 bg-black'>
					<div className='h-fit flex flex-col items-center justify-center md:my-24 lg:my-40 xl:my-56'>
						<h2 className='text-xl md:text-3xl font-semibold'>
							Would you like to buy a car?
						</h2>
						<p className='max-w-2xl text-xs md:text-base text-center my-6'>
							A toy car is a projection of a real car, made small enough for a
							child's hand ans imagination to grasp. A real car is a projection
							of a toy car, made large enough for an adult's hand and
							imagination to grasp.
						</p>
						<button className='text-sm md:text-base px-4 py-2 outline outline-white squeeze hover:outline-primary hover:rounded-lg'>
							Learn More
						</button>
					</div>
				</div>
				<video
					autoPlay
					loop
					muted
					className='absolute z-10 w-auto min-w-full min-h-fit max-w-none '
				>
					<source src={background} type='video/mp4' />
				</video>
			</div>
		</>
	);
};

export default Banner;
