import styles from './Card.module.scss'

console.log(styles);

function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src="/img/unliked.svg" alt="Unliked" />
			</div>
			<img src={props.img} width={133} height={112} alt="Card" />
			<p>{props.title}</p>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Price:</span>
					<b>{props.price}</b>
				</div>
				<button className="button" onClick={props.showPrice}>
					<img src="img/plus.svg" width={11} height={11} alt="Plus"></img>
				</button>
			</div>
		</div>
	);
}

export default Card;
