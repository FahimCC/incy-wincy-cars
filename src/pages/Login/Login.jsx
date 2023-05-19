/* eslint-disable react/no-unescaped-entities */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import login from '../../assets/login.png';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);

	const [err, setErr] = useState('');

	const { signIn, googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location?.state?.from?.pathname || '/';

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
				setErr('');
				navigate(from, { replace: true });
			})
			.catch(error => {
				setErr(error.message);
				console.log(error);
			});
	};

	const handleGoogleLogin = () => {
		googleSignIn()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				setErr('');
				navigate(from, { replace: true });
			})
			.catch(error => {
				console.log(error);
				setErr(error?.message);
			});
	};

	return (
		<div className='hero my-24'>
			<div className='hero-content flex-col lg:flex-row-reverse gap-20'>
				<figure data-aos='fade-left' className='max-w-2xl'>
					<img src={login} alt='' />
				</figure>
				<div
					data-aos='fade-right'
					className='card flex-shrink-0 w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-5'
				>
					<h1 className='text-3xl text-center font-medium'>Login</h1>
					<form onSubmit={handleLogin} className='card-body -my-4'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='text'
								placeholder='email'
								name='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='text'
								placeholder='password'
								name='password'
								className='input input-bordered'
								required
							/>
							<label className='label'>
								<p className='label-text-alt text-error'>{err}</p>
							</label>
						</div>
						<div className='form-control mt-6'>
							<button type='submit' className='bttn squeeze text-white'>
								Login
							</button>
						</div>
					</form>
					<div className='divider px-8'>OR</div>
					<Link
						onClick={handleGoogleLogin}
						className='border-2 mt-2 mx-8 h-10 flex justify-center items-center px-3 py-1 rounded-lg squeeze'
					>
						<img className='w-11 h-8' src={google} alt='' />
						<span className='-ml-1'>Continue with Google</span>
					</Link>
					<p className='text-center my-4'>
						Don't have an account?
						<Link
							to='/register'
							state={{ from: location?.state }}
							className='text-primary hover:underline pl-2'
						>
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
