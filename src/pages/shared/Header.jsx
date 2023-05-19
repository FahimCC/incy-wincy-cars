import { useContext } from 'react';
import { Link } from 'react-router-dom';
import car from '../../assets/car.svg';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	// console.log(user?.email, user?.photoURL);
	// const user  = {name: 'fahim', photoURL: 'sddcsscs'};

	const logo = (
		<div className='flex flex-col items-center'>
			<img className='w-24' src={car} alt='' />
			<span className='-mt-4 text-lg font-medium'>Incy Wincy Cars</span>
		</div>
	);
	const navBar = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/all-toys'>All Toys</Link>
			</li>
			{user && (
				<>
					<li>
						<Link to='/my-toys'>My Toys</Link>
					</li>
					<li>
						<Link to='/add-a-toys'>Add A Toys</Link>
					</li>
				</>
			)}

			<li>
				<Link to='/blog'>Blog</Link>
			</li>
		</>
	);

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.then(err => {
				console.log(err);
			});
	};

	return (
		<div className='shadow-lg'>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar-start '>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
							>
								{navBar}
							</ul>
						</div>
						<Link to='/' className='hidden lg:block'>
							{logo}
						</Link>
					</div>
					<Link to='/' className='lg:hidden block navbar-center'>
						{logo}
					</Link>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal px-1'>{navBar}</ul>
					</div>
					<div className='navbar-end'>
						{!user ? (
							<Link
								to='/login'
								className='text-sm md:text-base px-4 py-2 outline outline-primary squeeze hover:outline-secondary rounded-lg'
							>
								Login
							</Link>
						) : (
							<div
								className='dropdown dropdown-end tooltip tooltip-left tooltip-info'
								data-tip={user?.displayName}
							>
								<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
									<div className='w-10 rounded-full'>
										<img src={user?.photoURL} />
									</div>
								</label>
								<ul
									tabIndex={0}
									className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
								>
									<li>
										<a>Profile</a>
									</li>
									<li>
										<Link onClick={handleLogout}>Logout</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
