import React from 'react';
import styles from './Card.module.scss';

// console.log(styles);

function Card({ title, price, img, addToCart, addToFavorite }) {
	const [isAdded, setIsAdded] = React.useState(false);

	const handleClick = () => {
		addToCart({ title, img, price });
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card} >
			<div className={styles.favorite} onClick={addToFavorite}>
				<img src="/img/unliked.svg" alt="Unliked" />
			</div>
			<img src={img} width={133} height={112} alt="Card" />
			<p>{title}</p>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Price:</span>
					<b>{price}</b>
				</div>
				<img
					className="plus"
					src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
					alt="Plus"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}
export default Card;
