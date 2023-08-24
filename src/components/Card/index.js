import React from 'react';
import styles from './Card.module.scss';

// console.log(styles);

function Card({ id, title, price, img, addToCart, addToFavorite, favorited = false }) {
	const [isAdded, setIsAdded] = React.useState(false);
	const [isFavorite, setFavorite] = React.useState(favorited);

	const handleClick = () => {
		addToCart({ title, img, price });
		setIsAdded(!isAdded);
	};

	const onClickFavorite = () => {
		addToFavorite({ id, title, img, price });
		setFavorite(!isFavorite);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onClickFavorite}>
				<img
					src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
					alt="Unliked"
				/>
			</div>
			<img src={img} width={133} height={112} alt="Card" />
			<p>{title}</p>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Price:</span>
					<b>{price}</b>
				</div>
				<img
					className={styles.plus}
					onClick={handleClick}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt="Plus"
				/>
			</div>
		</div>
	);
}
export default Card;
