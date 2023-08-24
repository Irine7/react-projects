import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onChangeClearInput,
	onAddToFavorite,
	onAddToCart,
}) {
	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1>{searchValue ? `Search for ${searchValue}` : 'All sneakers'}</h1>
				<div className="search-block">
					<img src="/img/search.svg" alt="Search" />
					{searchValue && (
						<img
							onClick={onChangeClearInput}
							className="clear removeBtn"
							src="/img/btn-remove.svg"
							alt="Clear"
						/>
					)}
					<input
						onChange={onChangeSearchInput}
						value={searchValue}
						placeholder="Search..."
					/>
				</div>
			</div>

			<div className="d-flex flex-wrap justify-center">
				{items
					.filter((el) =>
						el.title.toLowerCase().includes(searchValue.toLowerCase())
					)
					.map((el) => (
						<Card
							key={uuidv4()}
							addToCart={(obj) => onAddToCart(obj)}
							addToFavorite={onAddToFavorite}
							{...el}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;
