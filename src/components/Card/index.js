import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';
import styles from './Card.module.scss';

// console.log(styles);

function Card({
	id,
	title,
	price,
	img,
	addToCart,
	addToFavorite,
	favorited = false,
	loading = false,
}) {
	const { isItemAdded } = React.useContext(AppContext);
	const [isFavorite, setFavorite] = React.useState(favorited);
	const obj = { id, parentId: id, title, img, price };

	const handleClick = () => {
		addToCart(obj);
	};

	const onClickFavorite = () => {
		addToFavorite(obj);
		setFavorite(!isFavorite);
	};

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={155}
					height={250}
					viewBox="0 0 155 265"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
					<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
					<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
					<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
					<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
				</ContentLoader>
			) : (
				<>
					{addToFavorite && (
						<div className={styles.favorite} onClick={onClickFavorite}>
							<img
								src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
								alt="Unliked"
							/>
						</div>
					)}
					<img src={img} width="100%" height={135} alt="Card" />
					<p>{title}</p>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Price:</span>
							<b>{price}</b>
						</div>
						{addToCart && (
							<img
								className={styles.plus}
								onClick={handleClick}
								src={
									isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
								}
								alt="Plus"
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
}
export default Card;
