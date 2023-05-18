import './Checkout.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../components/Header2/Header2';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { FiCheck } from 'react-icons/fi';
import {
	cvv_format,
	expiry_format,
	name_format,
	cc_format,
} from '../../utils/inputFormat';

const Checkout = () => {
	const ticket = useSelector(state => state.ticket.ticket);
	const auth = useSelector(state => state.user.user.auth);
	const navigate = useNavigate();

	const initialState = {
		name: '',
		card: '',
		expiry: '',
		cvv: '',
	};

	const [state, setState] = useState(initialState);
	const [isModalHiden, setIsModalHiden] = useState(true);
	const [error, setError] = useState('');
	const totalDay =
		(new Date(ticket?.check_out)?.getTime() -
			new Date(ticket?.check_in)?.getTime()) /
		(1000 * 60 * 60 * 24);

	const [totalAmount, setTotalAmount] = useState(
		ticket?.price
			? ticket?.price * 1 + (ticket?.price * 0.03)?.toFixed(0) * 1
			: ticket?.price_per_night * totalDay +
					ticket?.price_per_night * 0.03
	);
	const [selectedPromoCode, setSelectedPromoCode] = useState('INITIAL-0');
	const [inputText, setInputText] = useState('');
	const paymentSuccess = () => {
		if (error === '') {
			setState(initialState);
			setIsModalHiden(false);
		}
	};

	const changehandler = e => {
		setError('');
		let { name, value } = e.target;

		if (name === 'card') {
			value = value.split(' ').join('');
		}
		if (name === 'expiry') {
			value = value.split('/').join('');
		}
		setState({
			...state,
			[name]: value,
		});
	};

	const payHandler = () => {
		if (state.name.trim() === '') {
			setError('name');
			return;
		}
		if (state.card.trim() === '' || state.card.length < 16) {
			setError('card');
			return;
		}
		if (state.expiry.trim() === '' || state.expiry.length < 4) {
			setError('expiry');
			return;
		}
		if (state.cvv.trim() === '' || state.cvv.length < 3) {
			setError('cvv');
			return;
		}
		if (error === '') {
			paymentSuccess();
		} else {
			return;
		}
	};

	useEffect(() => {
		if (!auth) {
			navigate('/login');
		}
	}, []);
	return (
		<section className="checkout-wrapper">
			<Header2 />
			<div className="checkout"></div>
			<div className="container">
				<div className="input-box-wrapper">
					<div className="input-box">
						<div className="ticket-info">
							{ticket?.airlineName ? (
								<div className="complete">
									<div className="heading">
										Complete your booking
									</div>
									<div className="details">
										<div>
											<span>Airline : </span>
											<span>{ticket?.airlineName}</span>
										</div>
										<div>
											<span>From : </span>
											<span>{ticket?.from}</span>
										</div>
										<div>
											<span>Departure : </span>
											<span>
												{
													ticket?.departure
														?.departureDate
												}{' '}
												{
													ticket?.departure
														?.departureTime
												}
											</span>
										</div>
										{ticket?.return && (
											<div>
												<span>Return : </span>
												<span>
													{ticket?.return?.returnDate}{' '}
													{ticket?.return?.returnTime}
												</span>
											</div>
										)}
										<div>
											<span>Duration : </span>
											<span>{ticket?.duration}</span>
										</div>
										<div>
											<span>To : </span>
											<span>{ticket?.to}</span>
										</div>
									</div>
								</div>
							) : ticket?.train_number ? (
								<div className="complete">
									<div className="heading">
										Complete your booking
									</div>
									<div className="details">
										<div>
											<span>Train Number : </span>
											<span>{ticket?.train_number}</span>
										</div>
										<div>
											<span>From : </span>
											<span>{ticket?.from}</span>
										</div>
										<div>
											<span>Departure : </span>
											<span>
												{
													ticket?.departure
														?.departureDate
												}{' '}
												{
													ticket?.departure
														?.departureTime
												}
											</span>
										</div>

										<div>
											<span>Duration : </span>
											<span>{ticket?.duration}</span>
										</div>
										<div>
											<span>Distance : </span>
											<span>{ticket?.kilometers} Km</span>
										</div>
										<div>
											<span>To : </span>
											<span>{ticket?.to}</span>
										</div>
									</div>
								</div>
							) : (
								<div className="complete">
									<div className="heading">
										Complete your booking
									</div>
									<div className="details">
										<div>
											<span>City : </span>
											<span>{ticket?.city}</span>
										</div>
										<div>
											<span>Hotel Name : </span>
											<span>{ticket?.hotel_name}</span>
										</div>

										<div>
											<span>Check In : </span>
											<span>{ticket?.check_in}</span>
										</div>
										<div>
											<span>Check Out : </span>
											<span>{ticket?.check_out}</span>
										</div>
										<div>
											<span>Room Type : </span>
											<span>{ticket?.room_type}</span>
										</div>
										<div>
											<span>Guests : </span>
											<span>{ticket?.guests}</span>
										</div>
										<div>
											<span>Rating : </span>
											<span>{ticket?.rating}/10</span>
										</div>
									</div>
								</div>
							)}
							<div className="payment">
								<div className="heading">Payment Method</div>
								<div className="all-inputs">
									<div>
										<label htmlFor="name">Full Name</label>
										<input
											className={
												error === 'name'
													? 'red-border'
													: ''
											}
											type="text"
											id="name"
											name="name"
											placeholder="Name On Card"
											autoComplete="off"
											value={name_format(state.name)}
											onChange={changehandler}
										/>
									</div>
									<div>
										<label htmlFor="card">
											Card Number
										</label>
										<input
											className={
												error === 'card'
													? 'red-border'
													: ''
											}
											type="text"
											id="card"
											name="card"
											placeholder="Card Number"
											autoComplete="off"
											value={cc_format(state.card)}
											maxLength={19}
											onChange={changehandler}
										/>
									</div>
									<div>
										<label htmlFor="expiry">Expiry</label>
										<input
											className={
												error === 'expiry'
													? 'red-border'
													: ''
											}
											type="text"
											id="expiry"
											name="expiry"
											placeholder="Expiry (MM/YY)"
											autoComplete="off"
											value={expiry_format(state.expiry)}
											maxLength={5}
											onChange={changehandler}
										/>
									</div>
									<div>
										<label htmlFor="cvv">CVV</label>
										<input
											className={
												error === 'cvv'
													? 'red-border'
													: ''
											}
											type="password"
											id="cvv"
											name="cvv"
											placeholder="CVV"
											autoComplete="off"
											value={cvv_format(state.cvv)}
											onChange={changehandler}
											maxLength={3}
										/>
									</div>
								</div>
								<button onClick={payHandler}>Pay</button>
							</div>
						</div>
						<div className="right">
							<div className="summary">
								<div className="heading">Fare Summary</div>
								<div className="fare">
									<div className="base">
										<span>
											<AiOutlinePlusCircle /> Base Fare
										</span>
										<span>
											₹{' '}
											{ticket?.price
												? ticket.price.toLocaleString()
												: `${ticket?.price_per_night.toLocaleString()}/ Night`}
										</span>
									</div>
									{!ticket?.price && (
										<div className="base">
											<span>
												<AiOutlinePlusCircle /> Total
												Stay
											</span>
											<span>{totalDay} Days</span>
										</div>
									)}
									<div className="taxes">
										<span>
											<AiOutlinePlusCircle />
											Supercharge & Taxes
										</span>
										<span>
											₹{' '}
											{ticket?.price
												? (
														ticket?.price * 0.03
												  )?.toLocaleString()
												: (
														ticket?.price_per_night *
														0.03
												  ).toLocaleString()}
										</span>
									</div>
									{!Number(
										selectedPromoCode.split('-').at(-1)
									) <= 0 && (
										<div className="total">
											<div>
												<span>Total Amount</span>
												<span>
													<span
														style={{
															color: 'green',
															fontSize: '15px',
															margin: '0 5px 0 0',
														}}>
														₹{' '}
														{selectedPromoCode
															.split('-')
															.at(-1)}{' '}
														% off
													</span>

													<span
														style={{
															textDecoration:
																'line-through',
															fontSize: '13px',
														}}>
														₹{' '}
														{totalAmount.toLocaleString()}
													</span>
												</span>
											</div>
										</div>
									)}
									<div className="total">
										<div>
											<span>Payable Amount</span>
											<span>
												₹{' '}
												{(
													(totalAmount *
														(100 -
															selectedPromoCode
																.split('-')
																.at(-1))) /
													100
												).toLocaleString()}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="promo">
								<div className="heading">Promo Codes</div>
								<div className="code-wrapper">
									<div className="in">
										<input
											disabled={true}
											type="text"
											className="promo-input"
											placeholder="Enter promo code here"
											value={inputText}
											onChange={e => {
												setInputText(e.target.value);
												setSelectedPromoCode(
													e.target.value
												);
											}}
										/>
										{inputText.trim() && (
											<RxCross2
												onClick={() => {
													setSelectedPromoCode(
														'INITIAL-0'
													);
													setInputText('');
												}}
												className="icon"
											/>
										)}
									</div>

									<div
										onClick={() => {
											setSelectedPromoCode('MMTCLONE-20');
											setInputText('MMTCLONE20');
										}}
										className="code">
										<span>MMTCLONE20</span>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
										</p>
									</div>
									<div
										onClick={() => {
											setSelectedPromoCode('NEW-30');
											setInputText('NEW30');
										}}
										className="code">
										<span>NEW30</span>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
										</p>
									</div>
									<div
										onClick={() => {
											setSelectedPromoCode('VIVEK-50');
											setInputText('VIVEK50');
										}}
										className="code">
										<span>VIVEK50</span>
										<p>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{!isModalHiden && (
				<div
					onClick={() => {
						if (!isModalHiden) {
							setIsModalHiden(true);
							navigate('/');
						}
					}}
					className="modal-wrapper">
					<div
						onClick={e => {
							e.stopPropagation(true);
						}}
						className={isModalHiden ? 'modal hidden' : 'modal'}>
						<div className="top">
							<FiCheck className="icon" />
							<div>Payment Successful!</div>
						</div>
						<div className="bottom">
							<div>
								<span>
									{ticket?.airlineName
										? 'Airline'
										: ticket?.train_number
										? 'Train Number'
										: 'Hotel Name'}
								</span>
								<span>
									{ticket?.airlineName
										? ticket?.airlineName
										: ticket?.train_number
										? ticket?.train_number
										: ticket.hotel_name}
								</span>
							</div>
							<div>
								<span>Amount</span>
								<span>
									₹{' '}
									{(
										(totalAmount *
											(100 -
												selectedPromoCode
													.split('-')
													.at(-1))) /
										100
									).toLocaleString()}
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Checkout;
