import './SignupBox.scss';
import { useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
// auth
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth as authFire } from './../../firebase';
import { login } from '../../redux/slice/userSlice';

const SignupBox = () => {
	const initialData = {
		name: '',
		email: '',
		password: '',
	};
	const [signupData, setSignupData] = useState(initialData);
	const [errorIn, setErrorIn] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loggingIn, setLoggingIn] = useState(false);

	const changeHandler = e => {
		setErrorIn('');
		const { name, value } = e.target;
		setSignupData({
			...signupData,
			[name]: value,
		});
	};

	const signupHandler = e => {
		e.preventDefault();
		if (signupData.name.trim() === '') {
			setErrorIn('name');
			return;
		}
		if (!validator.isEmail(signupData.email)) {
			setErrorIn('email');
			return;
		}
		if (signupData.password.trim() === '') {
			setErrorIn('');
			return;
		}
		setLoggingIn(true);

		createUserWithEmailAndPassword(
			authFire,
			signupData.email,
			signupData.password
		)
			.then(({ user }) => {
				updateProfile(authFire.currentUser, {
					displayName: signupData.name,
				}).then(() => {
					dispatch(login(user));
				});
				setLoggingIn(false);

				navigate(-1);
			})
			.catch(({ message }) => {
				setSignupData(initialData);
				setLoggingIn(false);
				toast.error(message, {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				});
			});
	};

	return (
		<div className="signup-wrapper">
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<div className="signup-box">
				<div>
					<label htmlFor="name">Name:</label>
					<input
						className={errorIn === 'name' ? 'red-border' : ''}
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						value={signupData.name}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						className={errorIn === 'email' ? 'red-border' : ''}
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={signupData.email}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						className={errorIn === 'password' ? 'red-border' : ''}
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						value={signupData.password}
						onChange={changeHandler}
					/>
				</div>
			</div>
			<div className="bottom">
				<div>
					<button disabled={loggingIn} onClick={signupHandler}>
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignupBox;
