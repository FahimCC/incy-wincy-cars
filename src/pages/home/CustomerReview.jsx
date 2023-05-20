/* eslint-disable react/no-unescaped-entities */
import { Rating } from '@smastrom/react-rating';

const CustomerReview = () => {
	return (
		<div className='container my-36'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				Customer Review
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div
					data-aos='flip-right'
					className='flex flex-col items-center justify-center border-double border-4 border-secondary rounded-lg p-10'
				>
					<div className='avatar'>
						<div className='w-24 mask mask-squircle'>
							<img src='https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/336865648_679337297211884_8661796833128537585_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nePQcD6Xg-UAX8fqWWG&_nc_ht=scontent.fdac41-1.fna&oh=00_AfDUCNlp6C8g2f-4R8nVhIn_VZ3_AxusaFSJdy8sc249YA&oe=646E4D09' />
						</div>
					</div>
					<p className='my-5 text-center'>
						"Absolutely love this toy car! The design is sleek and
						attention-grabbing. It's made of durable materials and the remote
						control works flawlessly. Provides endless fun for kids. Highly
						recommended!"
					</p>
					<h2 className='text-2xl mb-3'>Ovi Mondal</h2>
					<Rating style={{ maxWidth: 150 }} value={4.5} readOnly />
				</div>
				<div
					data-aos='flip-left'
					className='flex flex-col items-center justify-center border-double border-4 border-primary rounded-lg p-10'
				>
					<div className='avatar'>
						<div className='w-24 mask mask-squircle'>
							<img src='https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/297873313_2339167886238326_9112521881084811457_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PMxdx7ZKdOMAX8CNv1B&_nc_ht=scontent.fdac41-1.fna&oh=00_AfAfD8NR5v5EIPmTAGyanjFgUDsCUAMyJb1p2uRJArepsw&oe=646D8352' />
						</div>
					</div>
					<p className='my-5 text-center'>
						"Sleek design, durable, easy-to-use remote control, and long-lasting
						rechargeable battery. Provides hours of entertainment for kids.
						Highly recommended for young car enthusiasts."
					</p>
					<h2 className='text-2xl mb-3'>Jashim Uddin</h2>
					<Rating style={{ maxWidth: 150 }} value={4} readOnly />
				</div>
			</div>
		</div>
	);
};

export default CustomerReview;
