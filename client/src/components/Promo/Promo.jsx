import './Promo.scss';
import flight from './../../assets/img/flight.avif';
import translate from './../../assets/img/translate.avif';
import pc from './../../assets/img/pc.png';

const Promo = () => {
	return (
		<section className="promo-wrapper">
			<div className="promo">
				<div>
					<img src={flight} alt="img" />
					<div>
						<div>Planning to book an international flight?</div>
						<div>Check Travel Guidelines</div>
					</div>
				</div>
				<div>
					<img src={translate} alt="img" />
					<div>
						<div>We are now available in हिंदी!</div>
						<div>Change Language</div>
					</div>
				</div>
				<div>
					<img src={pc} alt="img" />
					<div>
						<div>
							Complete your web check-in on MakeMyTrip in easy
							steps.{' '}
						</div>
						<div>Know More</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promo;
