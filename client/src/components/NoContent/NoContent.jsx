import './NoContent.scss';

const NoContent = ({ data }) => {
	return (
		<section className="nocontent-wrapper">
			<div className="nocontent">
				<div>No {data} Found!</div>
			</div>
		</section>
	);
};

export default NoContent;
