import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './Sidebar';

function App() {
	const [items, setItems] = useState([]);
	const [addItem, setAddItem] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [clearInput, setClearInput] = useState('');

	useEffect(() => {
		fetch('https://64e34883bac46e480e78869c.mockapi.io/items')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	const onAddToCart = (obj) => {
		const containsObject = addItem.some(
			(item) => JSON.stringify(item) === JSON.stringify(obj)
		);
		setAddItem((prev) => (!containsObject ? [...prev, obj] : [...prev]));
		// console.log(containsObject);
		console.log(obj);
	};
	// console.log(addItem);

	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value);
	};

	const onChangeClearInput = (e) => {
		setSearchValue('');
	};

	return (
		<div className="wrapper clear">
			{/* Show Sidebar if cartOpened is true: */}
			{cartOpened && (
				<Sidebar items={addItem} onClose={() => setCartOpened(false)} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />
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
						.filter((el) => el.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((el) => (
							<Card
								key={uuidv4()}
								title={el.title}
								price={el.price}
								img={el.img}
								addToCart={(obj) => onAddToCart(obj)}
								addToFavorite={() => alert('Liked')}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
