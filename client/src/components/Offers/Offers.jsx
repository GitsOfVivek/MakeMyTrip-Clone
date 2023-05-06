import './Offers.scss';
import { BsArrowRight } from 'react-icons/bs';
import offer1 from './../../assets/img/offer1.jpg';
import offer2 from './../../assets/img/offer2.avif';
import offer3 from './../../assets/img/offer3.avif';
import offer4 from './../../assets/img/offer4.avif';

const OfferCard = ({ img, head, title, para }) => {
	return (
		<div className="offer-card-wrapper">
			<div className="offer-card">
				<div className="top">
					<img src={img} alt="img" />
					<div className="right">
						<div className="head">{head}</div>
						<div className="title">{title}</div>
						<p className="para">{para}</p>
					</div>
				</div>
				<div className="bottom">
					<div>T&C's Apply</div>
					<button>Book Now</button>
				</div>
			</div>
		</div>
	);
};

const Offers = () => {
	return (
		<section className="offers-wrapper">
			<div className="offers">
				<div className="sec1">
					<div className="heading">Offers</div>
					<div className="view-all">
						<span>View All</span>
						<BsArrowRight className="icon" />
					</div>
				</div>
				<div className="sec2">
					<div>
						<OfferCard
							img={offer1}
							head={'DOM HOTELS'}
							title={
								'Book Super Cool Stays for Your Summer Break!'
							}
							para={
								'Grab Up to 45% OFF* on Hotels & Homestays in India'
							}
						/>
						<OfferCard
							img={offer2}
							head={'INTL FLIGHTS'}
							title={'Welcoming Drukair to the India Skies!'}
							para={
								'Book flights between Delhi/Kolkata and Paro @ up to ₹2,000 OFF*.'
							}
						/>
						<OfferCard
							img={offer3}
							head={'INTL FLIGHTS'}
							title={'Around-The-World Travel Deals are Here!'}
							para={'FLAT 6% OFF* on International Flights'}
						/>
					</div>
					<div>
						<OfferCard
							img={offer4}
							head={'CABS'}
							title={
								'HERE NOW: Suhana Safar Sale for Your Summer Trips!'
							}
							para={
								'Enjoy delightful deals on cabs, buses & trains. Also, grab 6-7 PM Jackpot Deals.'
							}
						/>
						<OfferCard
							img={offer1}
							head={'DOM HOTELS'}
							title={
								'Book Super Cool Stays for Your Summer Break!'
							}
							para={
								'Grab Up to 45% OFF* on Hotels & Homestays in India'
							}
						/>
						<OfferCard
							img={offer2}
							head={'INTL FLIGHTS'}
							title={'Welcoming Drukair to the India Skies!'}
							para={
								'Book flights between Delhi/Kolkata and Paro @ up to ₹2,000 OFF*.'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offers;
