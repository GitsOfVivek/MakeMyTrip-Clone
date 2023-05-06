import './TrainCard.scss';
import date from 'date-and-time';
import { bookTicket } from '../../redux/slice/ticketSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TrainCard = ({ train }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const bookHandler = () => {
		dispatch(bookTicket(train));
		navigate('/checkout');
	};
	return (
		<section className="train-card-wrapper">
			<div className="train-card">
				<div className="sec">
					<div>
						<div>From:</div>
						<div className="val">{train?.from}</div>
					</div>
					<div>
						<div>To:</div>
						<div className="val">{train?.to}</div>
					</div>
					<div>
						<div>Train Number:</div>
						<div className="val">{train?.train_number}</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Departure Date:</div>
						<div className="date">
							<div>
								<span>
									{date.format(
										new Date(
											train?.departure?.departureDate
										),
										`D `
									)}
								</span>
								<p>
									{date.format(
										new Date(
											train?.departure?.departureDate
										),
										`MMM'YY,`
									)}
								</p>
								<p>
									{date.format(
										new Date(
											train?.departure?.departureDate
										),
										`dddd`
									)}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div>Departure Time:</div>
						<div className="date">
							<div>{train?.departure?.departureTime}</div>
						</div>
					</div>
				</div>
				<div className="sec">
					<div>
						<div>Price:</div>
						<div className="val">₹ {train?.price}</div>
					</div>
					<div>
						<div>Distance:</div>
						<div className="val">{train?.kilometers} Km</div>
					</div>

					<div>
						<div>Duration:</div>
						<div className="val">{train?.duration}</div>
					</div>
				</div>
			</div>
			<button onClick={bookHandler} className="book-now">
				Book Now
			</button>
		</section>
	);
};

export default TrainCard;
