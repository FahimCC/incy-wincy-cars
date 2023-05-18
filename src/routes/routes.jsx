import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AddAToys from '../pages/add-a-toys/AddAToys';
import AllToys from '../pages/all-toys/AllToys';
import Blog from '../pages/blog/Blog';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import MyToys from '../pages/my-toys/MyToys';
import ErrorPage from '../pages/shared/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/all-toys',
				element: <AllToys />,
			},
			{
				path: '/my-toys',
				element: <MyToys />,
			},
			{
				path: '/add-a-toys',
				element: <AddAToys />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
		],
	},
]);

export default router;
