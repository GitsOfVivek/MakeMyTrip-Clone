import './Header1.scss';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.png';
import offer from './../../assets/img/discount.jpeg';
import makemytrip from './../../assets/img/makemytrip.svg';
import bag from './../../assets/img/bag.png';
import { BiChevronDown } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const Header1 = () => {
	const { auth, userData } = useSelector(state => state.user.user);

	return (
		<section className="header1-wrapper">
			<div className="header1">
				<Link className="logo" to={'/'}>
					<img src={logo} alt="logo-mmt" />
				</Link>
				<div className="right-sec">
					<div className="offer">
						<img src={offer} alt="offer" />
						<div className="text">
							<span>Super Offers</span>
							<span>Explore great deals & offers</span>
						</div>
					</div>
					<div className="myBiz">
						<img
							src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
							alt="myBiz"
						/>
						<div className="text">
							<span>Introducing myBiz</span>
							<span>Buisness Travel Solution</span>
						</div>
					</div>
					<div className="myTrip">
						<img src={bag} alt="myTrip" />
						<div className="text">
							<span>My Trips</span>
							<span>Manage your bookings</span>
						</div>
					</div>
					<Link className="login" to={auth ? '/profile' : '/login'}>
						{auth ? (
							<span className="user-name">
								{userData?.displayName?.split(' ')?.[0]}
							</span>
						) : (
							<>
								<img
									src={makemytrip}
									className="cropped-img"
									alt="myTrip"
								/>{' '}
								<span>Login or Create Account</span>
								<BiChevronDown className="down-arrow" />
							</>
						)}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Header1;
