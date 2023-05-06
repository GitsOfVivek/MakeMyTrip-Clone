import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './TrainInputBox.scss';
import { TbArrowsExchange } from 'react-icons/tb';
import { BiChevronDown } from 'react-icons/bi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import date from 'date-and-time';

const TrainInputBox = ({ trains, setFilteredTrains }) => {
	const [type, setType] = useState('oneway');
	const [fareType, setFareType] = useState('general');
	const initialSate = {
		from: 'Delhi',
		to: 'Mumbai',
		departure: '2023-02-14',
		return: '2023-02-15',
	};
	const [state, setState] = useState(initialSate);

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
		setFilteredTrains(
			trains.filter(
				train =>
					train.from === state.from &&
					train.to === state.to &&
					train.departure.departureDate === state.departure
			)
		);
	};

	return (
		<section className="input-box-wrapper-train">
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
								<span>{state.from} Railway Station, India</span>
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
								<span>{state.to} Railway Station, India</span>
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
									Select Categoiers:
								</span>
								<div
									className={
										fareType === 'general' ? 'checked' : ''
									}>
									<input
										type="radio"
										name="fareType"
										id="general"
										checked={fareType === 'general'}
										onChange={e => {
											setFareType('general');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="general">
										General
									</label>
								</div>
								<div
									className={
										fareType === 'sleeper' ? 'checked' : ''
									}>
									<input
										type="radio"
										name="fareType"
										id="sleeper"
										checked={fareType === 'sleeper'}
										onChange={e => {
											setFareType('sleeper');
										}}
									/>{' '}
									<label
										className="fares-label"
										htmlFor="sleeper">
										Sleeper
									</label>
								</div>
								<div
									className={
										fareType === 'ac' ? 'checked' : ''
									}>
									<input
										type="radio"
										name="fareType"
										id="ac"
										checked={fareType === 'ac'}
										onChange={e => {
											setFareType('ac');
										}}
									/>{' '}
									<label className="fares-label" htmlFor="ac">
										AC
									</label>
								</div>
							</div>
							<div className="tranding">
								<span>Trending Searches:</span>
								<div>
									<span>Delhi</span>{' '}
									<HiArrowNarrowRight className="icon" />
									<span>Chennai</span>
								</div>
								<div>
									<span>Gorakhpur</span>
									<HiArrowNarrowRight className="icon" />
									<span>Mumbai</span>
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

export default TrainInputBox;
