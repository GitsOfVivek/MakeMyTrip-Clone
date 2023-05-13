import { useEffect, useState } from 'react';
import HotelCard from '../../components/HotelCard/HotelCard';
import HotelInputBox from '../../components/HotelInputBox/HotelInputBox';
import './Hotels.scss';
import axios from 'axios';
import { FLIGHT_API_LINK_TWO, HOTEL_API_LINK, HOTEL_API_LINK_TWO } from '../../config';
import Error from './../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import NoContent from '../../components/NoContent/NoContent';

const Hotels = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [hotels, setHotels] = useState([]);
	const [fliteredHotels, setFliteredHotels] = useState([]);

	const getHotelsData = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(HOTEL_API_LINK);
			setHotels(data.data);
			setFliteredHotels(data.data);
			setIsLoading(false);
		} catch (err) {
			try {
				const { data } = await axios.get(HOTEL_API_LINK_TWO);
				setHotels(data);
				setFliteredHotels(data);
				setIsLoading(false);
			} catch (err) {
				setError(err.message);
				setIsLoading(false);
			}
		}
	};

	useEffect(() => {
		getHotelsData();
	}, []);
	return (
		<section className="hotels-wrapper">
			<div className="hotels">
				<div className="container">
					<HotelInputBox
						hotels={hotels}
						setFliteredHotels={setFliteredHotels}
					/>
				</div>
			</div>
			<div className="available">Available Hotels</div>
			<div className="hotel-tickets">
				{error ? (
					<Error message={error} />
				) : isLoading ? (
					<Loading />
				) : fliteredHotels.length === 0 ? (
					<NoContent data="Hotels" />
				) : (
					fliteredHotels.map((hotel, idx) => (
						<HotelCard key={idx} hotel={hotel} />
					))
				)}
			</div>
		</section>
	);
};

export default Hotels;
