import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
	const [items, setItems] = React.useState([]);
	const [addItem, setAddItem] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		axios
			.get('https://64e34883bac46e480e78869c.mockapi.io/items')
			.then((res) => {
				setItems(res.data);
			});
		axios
			.get('https://64e34883bac46e480e78869c.mockapi.io/cart')
			.then((res) => {
				setAddItem(res.data);
			});
		axios
			.get('https://64e6694009e64530d17ff937.mockapi.io/favorites')
			.then((res) => {
				setFavorites(res.data);
			});
	}, []);

	const onAddToCart = (obj) => {
		axios.post('https://64e34883bac46e480e78869c.mockapi.io/cart', obj);

		const containsObject = addItem.some(
			(item) => JSON.stringify(item) === JSON.stringify(obj)
		);
		setAddItem((prev) => (!containsObject ? [...prev, obj] : [...prev]));
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://64e34883bac46e480e78869c.mockapi.io/cart/${id}`);
		setAddItem((prev) => prev.filter((item) => item.id !== id));
	};

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => favObj.id === obj.id)) {
				axios.delete(
					`https://64e6694009e64530d17ff937.mockapi.io/favorites/${obj.id}`
				);
			} else {
				const { data } = await axios.post(
					'https://64e6694009e64530d17ff937.mockapi.io/favorites',
					obj
				);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Failed to add to favorites');
		}
	};

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
				<Sidebar
					items={addItem}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)} />

			<Routes>
				<Route
					path="/"
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
						/>
					}
				/>
			</Routes>

			<Routes>
				<Route
					path="/favorites"
					element={
						<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
