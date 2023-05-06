import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slice/userSlice';
import Header2 from '../../components/Header2/Header2';

const Profile = () => {
	const auth = useSelector(state => state.user.user.auth);
	const userData = useSelector(state => state.user.user.userData);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signOutFun = () => {
		dispatch(logout());
		navigate('/login');
	};

	useEffect(() => {
		if (!auth) {
			navigate('/login');
		}
	}, []);

	return (
		<section className="profile-wrapper">
			<Header2 />
			<div className="profile">
				<div className="container">
					<div className="input-box-wrapper">
						<div className="input-box">
							<div className="img-wrapper">
								{userData?.photoURL ? (
									<img src={userData?.photoURL} alt="img" />
								) : (
									<p>
										{userData?.displayName
											?.split(' ')
											.map(el => el[0])}
									</p>
								)}
								<div onClick={signOutFun}>
									<div>Logout</div>
								</div>
							</div>
							<div className="details">
								<div className="header">
									<div>Profile</div>
									<p>
										Basic info, for a faster booking
										experience
									</p>
								</div>
								<div className="info">
									<div>
										<span>Name</span>
										<span>{userData?.displayName}</span>
									</div>
									<div>
										<span>Email</span>
										<span>{userData?.email}</span>
									</div>
									<div>
										<span>Password</span>
										<span>XXXXX</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
