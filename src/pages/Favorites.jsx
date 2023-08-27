import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import AppContext from '../context';

function Favorites() {
	const { favorites, onAddToFavorite } = React.useContext(AppContext);

	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1>My favorites</h1>
			</div>
			<div className="d-flex flex-wrap justify-center">
				{favorites.map((el) => (
					<Card
						key={uuidv4()}
						favorited={true}
						addToFavorite={onAddToFavorite}
						{...el}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;
