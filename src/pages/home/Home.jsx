import Banner from './Banner';
import CustomerReview from './CustomerReview';
import NewArrivals from './NewArrivals';
import PhotoGallery from './PhotoGallery';

const Home = () => {
	return (
		<div>
			<Banner />
			<PhotoGallery />
			<NewArrivals />
			<CustomerReview />
		</div>
	);
};
export default Home;
