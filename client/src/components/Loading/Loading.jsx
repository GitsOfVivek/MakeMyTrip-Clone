import './Loading.scss';
import loading from './../../assets/img/flying-airplane.gif';

const Loading = () => {
	return (
		<section className="loading-wrapper">
			<div className="loading">
				<img src={loading} alt="loading" />
				<div>Featching Data...</div>
			</div>
		</section>
	);
};

export default Loading;
