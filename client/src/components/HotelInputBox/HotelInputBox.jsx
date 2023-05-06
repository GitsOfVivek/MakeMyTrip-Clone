import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './HotelInputBox.scss';
import { BiChevronDown } from 'react-icons/bi';
import date from 'date-and-time';

const HotelInputBox = ({ hotels, setFliteredHotels }) => {
	const [type, setType] = useState('single');
	const initialSate = {
		city: 'Goa',
		check_in: '2023-02-15',
		check_out: '2023-02-20',
		guests: '2',
	};
	const [state, setState] = useState(initialSate);

	const changeHandler = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value,
		});
	};

	const searchHandler = () => {
		setFliteredHotels(
			hotels.filter(
				hotel =>
					hotel.city === state.city &&
					hotel.check_in === state.check_in &&
					hotel.check_out === state.check_out &&
					hotel.guests === state.guests
			)
		);
	};

	return (
		<section className="input-box-wrapper">
			<div className="input-box">
				<Navigation />
				<div className="input-wrapper">
					<div className="input">
						<div className="top-sec">
							<div className={type === 'single' ? 'checked' : ''}>
								<input
									type="radio"
									name="type"
									id="single"
									checked={type === 'single'}
									onChange={e => {
										setType('single');
									}}
								/>{' '}
								<label htmlFor="single">Single</label>
							</div>
							<div className={type === 'double' ? 'checked' : ''}>
								<input
									type="radio"
									name="type"
									id="double"
									checked={type === 'double'}
									onChange={e => {
										setType('double');
									}}
								/>
								<label htmlFor="double">Double</label>
							</div>
							<div className={type === 'king' ? 'checked' : ''}>
								<input
									type="radio"
									name="type"
									id="king"
									checked={type === 'king'}
									onChange={e => {
										setType('king');
									}}
								/>
								<label htmlFor="king">King</label>
							</div>
						</div>
						<div className="bottom-sec">
							<div className="city">
								<label htmlFor="city">City</label>
								<input
									type="text"
									id="city"
									placeholder="city"
									autoComplete="off"
									name="city"
									value={state.city}
									onChange={changeHandler}
								/>
								<span>{state.city}, India</span>
							</div>

							<div>
								<label htmlFor="check_in">
									<span>Check In</span>{' '}
									<BiChevronDown className="icon" />{' '}
								</label>
								<div className="date">
									<div>
										<span>
											{date.format(
												new Date(state.check_in),
												`D `
											)}
										</span>
										<p>
											{date.format(
												new Date(state.check_in),
												`MMM'YY`
											)}
										</p>
									</div>
									<div>
										{date.format(
											new Date(state.check_in),
											`dddd`
										)}
									</div>
								</div>
								<input
									className={'date-input'}
									type="date"
									id="check_in"
									autoComplete="off"
									name="check_in"
									value={state.check_in}
									onChange={changeHandler}
								/>
							</div>
							<div>
								<label htmlFor="check_out">
									<span>Check Out</span>{' '}
									<BiChevronDown className="icon" />
								</label>
								<div className="date">
									<div>
										<span>
											{date.format(
												new Date(state.check_out),
												`D `
											)}
										</span>
										<p>
											{date.format(
												new Date(state.check_out),
												`MMM'YY`
											)}
										</p>
									</div>
									<div>
										{date.format(
											new Date(state.check_out),
											`dddd`
										)}
									</div>
								</div>

								<input
									className="date-input"
									type="date"
									id="check_out"
									autoComplete="off"
									name="check_out"
									value={state.check_out}
									onChange={changeHandler}
									disabled={type === 'oneway'}
								/>
							</div>
							<div className="guests">
								<label htmlFor="guests">Guests</label>
								<input
									type="text"
									id="guests"
									placeholder="guests"
									autoComplete="off"
									name="guests"
									value={state.guests}
									onChange={e => {
										const value = e.target.value;
										const pattern =
											/^\d{0,10}(\.\d{0,2})?$/;
										if (value.match(pattern)) {
											changeHandler(e);
										}
									}}
								/>
								<span>{state.guests} Guests</span>
							</div>
						</div>
						<div className="btm-hotel">
							<div className="sec">
								<span>Recent Searches:</span>
								<div>
									<span>Goa</span>
									<span>14 Feb'23</span>
								</div>
								<div>
									<span>Delhi</span>
									<span>24 Feb'23</span>
								</div>
							</div>
							<div className="tranding">
								<span>Trending Searches:</span>
								<div>
									<span>Banglore</span>
								</div>
								<div>
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

export default HotelInputBox;
