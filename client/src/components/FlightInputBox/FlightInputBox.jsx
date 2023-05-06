import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './FlightInputBox.scss';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiChevronDown } from 'react-icons/bi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import date from 'date-and-time';
import { useNavigate } from 'react-router-dom';

const FlightInputBox = ({ flights, setFilteredFlight }) => {
	const [type, setType] = useState('oneway');
	const [fareType, setFareType] = useState('regular-fare');
	const initialSate = {
		from: 'Delhi',
		to: 'Mumbai',
		departure: '2023-02-14',
		return: '2023-02-15',
	};
	const [state, setState] = useState(initialSate);
	const navigate = useNavigate();
	const changeHandler = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const reverseInput = () => {
		const tempState = { ...state };
		setState({
			...state,
			from: tempState.to,
			to: tempState.from,
		});
	};

	const searchHandler = () => {
		if (!flights) {
			navigate('/flights');
		}
		setFilteredFlight(
			flights.filter(
				flight =>
					flight.from === state.from &&
					flight.to === state.to &&
					flight.departure.departureDate === state.departure
			)
		);
	};

	return (
		<section className="input-box-wrapper-flights">
			<div className="input-box">
				<Navigation />
				<div className="input-wrapper">
					<div className="input">
						<div className="top-sec">
							<div className={type === 'oneway' ? 'checked' : ''}>
								<input
									type="radio"
									name="type"
									id="oneway"
									checked={type === 'oneway'}
									onChange={e => {
										setType('oneway');
									}}
								/>{' '}
								<label htmlFor="oneway">One Way</label>
							</div>
							<div
								className={
									type === 'roundtrip' ? 'checked' : ''
								}>
								<input
									type="radio"
									name="type"
									id="roundtrip"
									checked={type === 'roundtrip'}
									onChange={e => {
										setType('roundtrip');
									}}
								/>
								<label htmlFor="roundtrip">Round Trip</label>
							</div>
							<div
								className={
									type === 'multicity' ? 'checked' : ''
								}>
								<input
									type="radio"
									name="type"
									id="multicity"
									checked={type === 'multicity'}
									onChange={e => {
										setType('multicity');
									}}
								/>
								<label htmlFor="multicity">Multi City</label>
							</div>
						</div>
						<div className="bottom-sec">
							<div className="from">
								<label htmlFor="from">From</label>
								<input
									type="text"
									id="from"
									placeholder="From"
									autoComplete="off"
									name="from"
									value={state.from}
									onChange={changeHandler}
								/>
								<span>{state.from} Airport, India</span>
							</div>
							<TbArrowsExchange
								className="arrows"
								onClick={reverseInput}
							/>
							<div className="to">
								<label htmlFor="to">To</label>
								<input
									type="text"
									id="to"
									placeholder="To"
									autoComplete="off"
									name="to"
									value={state.to}
									onChange={changeHandler}
								/>
								<span>{state.to} Airport, India</span>
							</div>
							<div>
								<label htmlFor="departure">
									<span>Departure</span>{' '}
									<BiChevronDown className="icon" />{' '}
								</label>
								<div className="date">
									<div>
										<span>
											{date.format(
												new Date(state.departure),
												`D `
											)}
										</span>
										<p>
											{date.format(
												new Date(state.departure),
												`MMM'YY`
											)}
										</p>
									</div>
									<div>
										{date.format(
											new Date(state.departure),
											`dddd`
										)}
									</div>
								</div>
								<input
									className={'date-input'}
									type="date"
									id="departure"
									autoComplete="off"
									name="departure"
									value={state.departure}
									onChange={changeHandler}
								/>
							</div>
							<div>
								<label htmlFor="return">
									<span>Return</span>{' '}
									<BiChevronDown className="icon" />
								</label>
								{type !== 'oneway' ? (
									<div className="date">
										<div>
											<span>
												{date.format(
													new Date(state.return),
													`D `
												)}
											</span>
											<p>
												{date.format(
													new Date(state.return),
													`MMM'YY`
												)}
											</p>
										</div>
										<div>
											{date.format(
												new Date(state.return),
												`dddd`
											)}
										</div>
									</div>
								) : (
									<div
										onClick={() => setType('roundtrip')}
										className="disabled-text">
										Tap to add a return date for bigger
										discounts
									</div>
								)}
								<input
									className="date-input"
									type="date"
									id="return"
									autoComplete="off"
									name="return"
									value={state.return}
									onChange={changeHandler}
									disabled={type === 'oneway'}
								/>
							</div>
						</div>
						<div className="btm">
							<div className="sec">
								<span className="text-fare-type">
									Select A Fare Type:
								</span>
								<div
									className={
										fareType === 'regular-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="regular-fare"
										checked={fareType === 'regular-fare'}
										onChange={e => {
											setFareType('regular-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="regular-fare">
										Regular Fares
									</label>
								</div>
								<div
									className={
										fareType === 'armed-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="armed-fare"
										checked={fareType === 'armed-fare'}
										onChange={e => {
											setFareType('armed-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="armed-fare">
										Armed Forces Fares
									</label>
								</div>
								<div
									className={
										fareType === 'student-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="student-fare"
										checked={fareType === 'student-fare'}
										onChange={e => {
											setFareType('student-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="student-fare">
										Student Fares
									</label>
								</div>
								<div
									className={
										fareType === 'senior-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="senior-fare"
										checked={fareType === 'senior-fare'}
										onChange={e => {
											setFareType('senior-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="senior-fare">
										Senior Citizen Fares
									</label>
								</div>
								<div
									className={
										fareType === 'doctor-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="doctor-fare"
										checked={fareType === 'doctor-fare'}
										onChange={e => {
											setFareType('doctor-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="doctor-fare">
										Doctors & Nurses Fares
									</label>
								</div>
								<div
									className={
										fareType === 'double-fare'
											? 'checked'
											: ''
									}>
									<input
										type="radio"
										name="fareType"
										id="double-fare"
										checked={fareType === 'double-fare'}
										onChange={e => {
											setFareType('double-fare');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="double-fare">
										Double Seat Fares
									</label>
								</div>
							</div>
							<div className="tranding">
								<span>Trending Searches:</span>
								<div>
									<span>Banglore</span>{' '}
									<HiArrowNarrowRight className="icon" />
									<span>Patna</span>
								</div>
								<div>
									<span>Mumbai</span>
									<HiArrowNarrowRight className="icon" />
									<span>Delhi</span>
								</div>
							</div>
						</div>
					</div>
					<button onClick={searchHandler} className="submit-btn">
						Search
					</button>
					<div className="explore">
						<img
							src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
							alt="arrow"
						/>
						<span>Explore More</span>
						<img
							src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_downArrow.png"
							alt="arrow"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlightInputBox;
