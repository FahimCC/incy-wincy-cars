import Banner from './Banner';
import CustomerReview from './CustomerReview';
import NewArrivals from './NewArrivals';
import PhotoGallery from './PhotoGallery';
import ToyTab from './ToyTab';

const Home = () => {
	return (
		<div>
			<Banner />
			<ToyTab />
			<PhotoGallery />
			<NewArrivals />
			<CustomerReview />
		</div>
	);
};
export default Home;
