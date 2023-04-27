
import './Card.css'

function Card(props) {
	const cardClasses = props.className;
	return (
		<div className={`card ${cardClasses}`}>{props.children}</div>
	);
}

export default Card;