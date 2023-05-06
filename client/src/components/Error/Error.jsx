import './Error.scss';

const Error = ({ message }) => {
	return (
		<section className="error-wrapper">
			<div className="error">
				<div>Oups! {message}</div>
				<div>Please reloade and try again.</div>
			</div>
		</section>
	);
};

export default Error;
