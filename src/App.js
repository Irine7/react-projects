import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import AppContext from './context';
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
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			const cartResponse = await axios.get(
				'https://64e34883bac46e480e78869c.mockapi.io/cart'
			);
			const favoritesResponse = await axios.get(
				'https://64e6694009e64530d17ff937.mockapi.io/favorites'
			);
			const itemsResponse = await axios.get(
				'https://64e34883bac46e480e78869c.mockapi.io/items'
			);

			setIsLoading(false);

			setAddItem(cartResponse.data);
			setFavorites(favoritesResponse.data);
			setItems(itemsResponse.data);
		}
		fetchData();
	}, []);

	const onAddToCart = (obj) => {
		console.log(obj);
		{
			/* Compare new item with the cart items and add it only if there is no the same one in the cart: */
		}
		if (addItem.find((item) => Number(item.id) === Number(obj.id))) {
			axios.delete(
				`https://64e34883bac46e480e78869c.mockapi.io/cart/${obj.id}`
			);
			setAddItem((prev) =>
				prev.filter((item) => Number(item.id) !== Number(obj.id))
			);
		} else {
			axios.post('https://64e34883bac46e480e78869c.mockapi.io/cart', obj);
			setAddItem((prev) => [...prev, obj]);
		}
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://64e34883bac46e480e78869c.mockapi.io/cart/${id}`);
		setAddItem((prev) => prev.filter((item) => item.id !== id));
	};

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(
					`https://64e6694009e64530d17ff937.mockapi.io/favorites/${obj.id}`
				);
				setFavorites((prev) =>
				prev.filter((item) => Number(item.id) !== Number(obj.id))
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

	const isItemAdded = (id) => {
		return addItem.some((obj) => Number(obj.id) === Number(id));
	};

	return (
		<AppContext.Provider
			value={{ items, addItem, favorites, isItemAdded, onAddToFavorite, setCartOpened, setAddItem }}
		>
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
								addItem={addItem}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddToFavorite={onAddToFavorite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>
				</Routes>

				<Routes>
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
