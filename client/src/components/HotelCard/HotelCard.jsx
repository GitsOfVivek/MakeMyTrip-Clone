import './HotelCard.scss';
import date from 'date-and-time';

import { bookTicket } from '../../redux/slice/ticketSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const bookHandler = () => {
		dispatch(bookTicket(hotel));
		navigate('/checkout');
	};
	return (
		<section className="hotel-card-wrapper">
			<div className="hotel-card">
				<div className="sec">
					<div>
						<div>Hotel:</div>
						<div className="val">{hotel?.hotel_name}</div>
					</div>
					<div>
						<div>City:</div>
						<div className="val">{hotel?.city}</div>
					</div>
					<div>
						<div>Ratings:</div>
						<div className="val">{hotel?.rating}/10</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Check In:</div>
						<div className="date">
							<div>
								<span>
									{date.format(
										new Date(hotel?.check_in),
										`D `
									)}
								</span>
								<p>
									{date.format(
										new Date(hotel?.check_in),
										`MMM'YY,`
									)}
								</p>
								<p>
									{date.format(
										new Date(hotel?.check_in),
										`dddd`
									)}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div>Check Out:</div>
						<div className="date">
							<div>
								<span>
									{date.format(
										new Date(hotel?.check_out),
										`D `
									)}
								</span>
								<p>
									{date.format(
										new Date(hotel?.check_out),
										`MMM'YY,`
									)}
								</p>
								<p>
									{date.format(
										new Date(hotel?.check_out),
										`dddd`
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Price:</div>
						<div className="val">
							₹ {hotel?.price_per_night}/night
						</div>
					</div>
					<div>
						<div>Room Type:</div>
						<div className="val">{hotel?.room_type}</div>
					</div>
					<div>
						<div>Guests:</div>
						<div className="val">{hotel?.guests}</div>
					</div>
				</div>
			</div>
			<button onClick={bookHandler} className="book-now">
				Book Now
			</button>
		</section>
	);
};

export default HotelCard;
