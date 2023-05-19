import { Rating } from '@smastrom/react-rating';

const CustomerReview = () => {
	return (
		<div className='container my-20'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				Customer Review
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div className='flex flex-col items-center justify-center border-double border-4 border-secondary rounded-lg p-10'>
					<div className='avatar'>
						<div className='w-24 mask mask-squircle'>
							<img src='https://lh3.googleusercontent.com/a/AGNmyxZvo-PwnMUuc32UjMPUuZHDkaYZ9CliEfMD-Ys3zws=s96-c' />
						</div>
					</div>
					<p className='my-5 text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						labore asperiores incidunt maiores maxime rerum minus, eius placeat
						debitis aperiam.
					</p>
					<h2 className='text-2xl mb-3'>Fahim Faysal</h2>
					<Rating style={{ maxWidth: 150 }} value={4.5} readOnly />
				</div>
				<div className='flex flex-col items-center justify-center border-double border-4 border-primary rounded-lg p-10'>
					<div className='avatar'>
						<div className='w-24 mask mask-squircle'>
							<img src='https://lh3.googleusercontent.com/a/AGNmyxZvo-PwnMUuc32UjMPUuZHDkaYZ9CliEfMD-Ys3zws=s96-c' />
						</div>
					</div>
					<p className='my-5 text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
						labore asperiores incidunt maiores maxime rerum minus, eius placeat
						debitis aperiam.
					</p>
					<h2 className='text-2xl mb-3'>Fahim Faysal</h2>
					<Rating style={{ maxWidth: 150 }} value={4} readOnly />
				</div>
			</div>
		</div>
	);
};

export default CustomerReview;
