import { useDispatch } from 'react-redux';
import './FlightCard.scss';
import date from 'date-and-time';
import { useNavigate } from 'react-router-dom';
import { bookTicket } from '../../redux/slice/ticketSlice';

const FlightCard = ({ flight }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const bookHandler = () => {
		dispatch(bookTicket(flight));
		navigate('/checkout');
	};

	return (
		<section className="flight-card-wrapper">
			<div className="flight-card">
				<div className="sec">
					<div>
						<div>From:</div>
						<div className="val">{flight?.from}</div>
					</div>
					<div>
						<div>To:</div>
						<div className="val">{flight?.to}</div>
					</div>
					<div>
						<div>Airline:</div>
						<div className="val">{flight?.airlineName}</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Departure:</div>
						<div className="date">
							<div>
								<span>
									{date.format(
										new Date(
											flight?.departure?.departureDate
										),
										`D `
									)}
								</span>
								<p>
									{date.format(
										new Date(
											flight?.departure?.departureDate
										),
										`MMM'YY,`
									)}
								</p>
								<p>
									{date.format(
										new Date(
											flight?.departure?.departureDate
										),
										`dddd`
									)}
								</p>
							</div>
							<div>{flight?.departure?.departureTime}</div>
						</div>
					</div>
					<div>
						<div>Return:</div>
						<div className="date">
							<div>
								<span>
									{date.format(
										new Date(flight?.return?.returnDate),
										`D `
									)}
								</span>
								<p>
									{date.format(
										new Date(flight?.return?.returnDate),
										`MMM'YY,`
									)}
								</p>
								<p>
									{date.format(
										new Date(flight?.return?.returnDate),
										`dddd`
									)}
								</p>
							</div>
							<div>{flight?.return?.returnTime}</div>
						</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Price:</div>
						<div className="val">₹ {flight?.price}</div>
					</div>
					{flight.via.length !== 0 && (
						<div>
							<div>Via:</div>
							<div className="val">{flight?.via?.join(', ')}</div>
						</div>
					)}
					<div>
						<div>Duration:</div>
						<div className="val">{flight?.duration}</div>
					</div>
				</div>
			</div>
			<button onClick={bookHandler} className="book-now">
				Book Now
			</button>
		</section>
	);
};

export default FlightCard;
