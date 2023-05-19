import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../assets/register.png';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
	useEffect(() => {
		AOS.init({
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 600,
		});
	}, []);

	const [err, setErr] = useState('');
	const [password, setPassword] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	const { createUser, updateUserProfile } = useContext(AuthContext);

	const handlePassword = event => {
		const password = event.target.value;
		setPassword(password);
		if (password.length < 6) {
			setPasswordErr('password should be at least 6 characters.');
		} else {
			setPasswordErr('');
		}
	};

	const handleRegister = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		console.log(email, name, photoURL);
		const userProfile = {
			displayName: name,
			photoURL: photoURL,
		};

		createUser(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				setErr('');
				updateUserProfile(userProfile)
					.then(() => {})
					.catch(err => {
						console.log(err);
					});
			})
			.then(error => {
				console.log(error?.message);
				setErr(error);
			});
	};

	return (
		<div className='hero my-24'>
			<div className='hero-content flex-col lg:flex-row gap-20'>
				<figure data-aos='fade-right' className='max-w-2xl'>
					<img src={register} alt='' />
				</figure>
				<div
					data-aos='fade-left'
					className='card flex-shrink-0 w-full max-w-sm border-2 border-primary hover:border-secondary bg-base-100 py-5'
				>
					<h1 className='text-3xl text-center font-medium'>Sign Up</h1>
					<form onSubmit={handleRegister} className='card-body -my-4'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='name'
								name='name'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
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
								type='password'
								placeholder='password'
								name='password'
								onChange={handlePassword}
								value={password}
								className='input input-bordered'
								required
							/>
						</div>
						{passwordErr && (
							<label className='label'>
								<p className='label-text-alt text-error'>{passwordErr}</p>
							</label>
						)}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Photo URL</span>
							</label>
							<input
								type='text'
								placeholder='password'
								name='photoURL'
								className='input input-bordered'
								required
							/>
						</div>
						{err && (
							<label className='label'>
								<p className='label-text-alt text-error'>{err}</p>
							</label>
						)}
						<div className='form-control mt-6'>
							<button
								type='submit'
								className='bttn squeeze text-white'
								// disabled={!err && !passwordErr ? true : false}
							>
								Register
							</button>
						</div>
					</form>
					<p className='text-center my-4'>
						Already have an account?
						<Link to='/login' className='text-primary hover:underline pl-2'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
