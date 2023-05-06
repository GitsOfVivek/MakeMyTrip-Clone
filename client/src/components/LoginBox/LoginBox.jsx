import { useEffect, useState } from 'react';
import './LoginBox.scss';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './../../redux/slice/userSlice';
import { ToastContainer, toast } from 'react-toastify';
// auth
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth as authFire, provider } from './../../firebase';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
	const initialData = {
		email: '',
		password: '',
	};
	const auth = useSelector(state => state.user.user.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [errorIn, setErrorIn] = useState('');
	const [loggingInGoogle, setLoggingInGoogle] = useState(false);
	const [loggingIn, setLoggingIn] = useState(false);
	const [loginData, setLoginData] = useState(initialData);

	const changeHandler = e => {
		setErrorIn('');
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	const googleLoginHandler = e => {
		e.preventDefault();
		setLoggingInGoogle(true);
		signInWithPopup(authFire, provider)
			.then(result => {
				const user = result.user.providerData[0];
				dispatch(login(user));
				setLoggingInGoogle(false);
				navigate(-1);
			})
			.catch(err => {
				setLoggingInGoogle(false);
				toast.error(err.message, {
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

	const loginHandler = async e => {
		e.preventDefault();
		if (!validator.isEmail(loginData.email)) {
			setErrorIn('email');
			setLoggingIn(false);
			return;
		}
		if (loginData.password.trim() === '') {
			setErrorIn('password');
			setLoggingIn(false);
			return;
		}
		setLoggingIn(true);

		try {
			const { user } = await signInWithEmailAndPassword(
				authFire,
				loginData.email,
				loginData.password
			);
			dispatch(login(user.providerData[0]));
			setLoggingIn(false);
		} catch (err) {
			setLoggingIn(false);
			setLoginData(initialData);
			toast.error(err.message, {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
	};

	useEffect(() => {
		if (auth) {
			navigate('/');
		}
	});

	return (
		<div className="login-wrapper">
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
			<div className="login-box">
				<div>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						name="email"
						className={errorIn === 'email' ? 'red-border' : ''}
						type="email"
						placeholder="Email"
						value={loginData.email}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						id="password"
						name="password"
						className={errorIn === 'password' ? 'red-border' : ''}
						type="password"
						placeholder="Password"
						value={loginData.password}
						onChange={changeHandler}
					/>
				</div>
			</div>
			<div className="bottom">
				<div>
					<button disabled={loggingIn} onClick={loginHandler}>
						Login
					</button>
					<span>or</span>
					<button
						disabled={loggingInGoogle}
						onClick={googleLoginHandler}
						className="ggl">
						<span>Continue with</span> <FcGoogle />
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginBox;
