import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewArrivals = () => {
	return (
		<div className='container my-36'>
			<h1 className='clip text-center font-medium text-3xl lg:text-5xl mb-10'>
				New Arrival
			</h1>

			<Swiper
				modules={[Pagination, Autoplay]}
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
				className='mySwiper'
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5'
								src='https://sc04.alicdn.com/kf/HTB1mo1OLXXXXXa6XVXXq6xXFXXXV.jpg?fbclid=IwAR0jIvD5HnSZ5cvVkSMQu5PTatwufjb_830rzZtaKF7COdwSZrof3i4jQtc'
							/>
						</div>
						<div className='justify-end text-center'>
							<h2 className='text-2xl'>Army Zip Car</h2>
							<p className='text-lg text-[#6930C3]'>$10.00</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5'
								src='https://m.media-amazon.com/images/I/61k2TG2kVYL._AC_UF1000,1000_QL80_.jpg?fbclid=IwAR1YveyzTsX5Qogab6kn2DEiBhITJ7yv7GjICoir4n2LU8l9QfTC4WlyJB8'
							/>
						</div>
						<h2 className='text-2xl'>Ambulance</h2>
						<p className='text-lg text-[#6930C3]'>$12.00</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5'
								src='https://cdn.shopify.com/s/files/1/0046/4191/4914/products/WhatsAppImage2021-05-10at6.01.42PM.jpg?v=1631283637&fbclid=IwAR2-cij1lnjzj-eK9I9oK1BC6tZSjImFqVxduypf6fRn0IY3zrxpNalKD3w'
							/>
						</div>
						<h2 className='text-2xl'>Zip Car</h2>
						<p className='text-lg text-[#6930C3]'>$15.00</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5'
								src='https://leantoys.com/eng_pl_Interactive-car-with-light-and-sound-Ice-Cream-Parlour-Food-Truck-12725_1.png?fbclid=IwAR3XExuMN9OQCbA0KKjKE7oqvKEtgqzq8Grc2Qf8DWDRMWLVZI5nQ03lIgc'
							/>
						</div>
						<h2 className='text-2xl'>Ice Cream Truck</h2>
						<p className='text-lg text-[#6930C3]'>$08.00</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5 '
								src='https://m.media-amazon.com/images/I/71HA0rWAjOL._AC_UF1000,1000_QL80_.jpg?fbclid=IwAR3vMJDcVzViRzSHd6pkKI8MKKQ8MofAHJJax4ADdfa_z84zyS_kbstQSfo'
							/>
						</div>
						<h2 className='text-2xl'>Fire Truck</h2>
						<p className='text-lg text-[#6930C3]'>$12.00</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex flex-col items-center justify-center bg-white hover:shadow-lg rounded-lg  border-2 hover:border-double w-full py-5 mb-16'>
						<div className='w-full h-72'>
							<img
								className='w-full h-full object-fill p-5'
								src='https://m.media-amazon.com/images/I/71+DXlMNnKS.jpg?fbclid=IwAR1037E4JERpEpORtya9NHRtJZ3ZnbL2XQoW17oIbgwWUCSoVJZWMFKsjDQ'
							/>
						</div>
						<h2 className='text-2xl'>Monster Truck</h2>
						<p className='text-lg text-[#6930C3]'>$20.00</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default NewArrivals;
