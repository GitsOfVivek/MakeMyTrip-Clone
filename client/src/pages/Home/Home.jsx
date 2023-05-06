import { useEffect } from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import FlightInputBox from '../../components/FlightInputBox/FlightInputBox';
import Offers from '../../components/Offers/Offers';
import Promo from '../../components/Promo/Promo';
const Home = () => {
	return (
		<section className="home-wrapper">
			<div className="home">
				<div className="container">
					<FlightInputBox />
				</div>
			</div>
			<div className="slab">
				<div>
					<img
						src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"
						alt=""
					/>
					<span>Where2Go</span>
				</div>
				<div>
					<img
						src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"
						alt=""
					/>
					<div>
						<span>TripMoney</span>
						<span>Loan Credit and More</span>
					</div>
				</div>
				<div>
					<img
						src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
						alt=""
					/>
					<div>
						<span>Explore International Flights</span>
						<span>
							Cheapest Flights to Paris, Bali, Tokyo & more
						</span>
					</div>
				</div>
				<div>
					<img
						src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"
						alt=""
					/>
					<div>
						<span>MICE</span>
						<span>Offsites, Events & Meetings</span>
					</div>
				</div>
				<div>
					<img
						src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"
						alt=""
					/>
					<span>Gift Cards</span>
				</div>
			</div>
			<Offers />
			<Promo />
		</section>
	);
};

export default Home;
