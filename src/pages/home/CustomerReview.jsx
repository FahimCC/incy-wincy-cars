import { Rating } from '@smastrom/react-rating';

const CustomerReview = () => {
	return (
		<div className='container my-36'>
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
						"Absolutely love this toy car! The design is sleek and
						attention-grabbing. It's made of durable materials and the remote
						control works flawlessly. Provides endless fun for kids. Highly
						recommended!"
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
						"Sleek design, durable, easy-to-use remote control, and long-lasting
						rechargeable battery. Provides hours of entertainment for kids.
						Highly recommended for young car enthusiasts."
					</p>
					<h2 className='text-2xl mb-3'>Fahim Faysal</h2>
					<Rating style={{ maxWidth: 150 }} value={4} readOnly />
				</div>
			</div>
		</div>
	);
};

export default CustomerReview;
