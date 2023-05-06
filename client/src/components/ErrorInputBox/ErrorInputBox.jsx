import Navigation from '../Navigation/Navigation';
import './ErrorInputBox.scss';

const FlightInputBox = () => {
	return (
		<section className="input-box-wrapper-error">
			<div className="input-box">
				<Navigation />
				<div className="input-wrapper">
					<div className="input">
						<span>This Feature is not Implemented yet.</span>
						<span>Please Try to Book Flights, Hotels & Train.</span>
						<span>Thanks!</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlightInputBox;
