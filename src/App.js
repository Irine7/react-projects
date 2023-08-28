import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import AppContext from './context';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
	const [items, setItems] = React.useState([]);
	const [addItem, setAddItem] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const [cartResponse, favoritesResponse, itemsResponse] =
					await Promise.all([
						axios.get('https://64e34883bac46e480e78869c.mockapi.io/cart'),
						axios.get('https://64e6694009e64530d17ff937.mockapi.io/favorites'),
						axios.get('https://64e34883bac46e480e78869c.mockapi.io/items'),
					]);

				setIsLoading(false);

				setAddItem(cartResponse.data);
				setFavorites(favoritesResponse.data);
				setItems(itemsResponse.data);
			} catch (error) {
				console.log('Failed on fetching data');
			}
		}
		fetchData();
	}, []);

	const onAddToCart = async (obj) => {
		{
			/* Compare new item with the cart items and add it only if there is no the same one in the cart: */
		}
		try {
			if (addItem.find((item) => Number(item.id) === Number(obj.id))) {
				setAddItem((prev) =>
					prev.filter((item) => Number(item.id) !== Number(obj.id))
				);
				await axios.delete(
					`https://64e34883bac46e480e78869c.mockapi.io/cart/${obj.id}`
				);
			} else {
				setAddItem((prev) => [...prev, obj]);
				await axios.post(
					'https://64e34883bac46e480e78869c.mockapi.io/cart',
					obj
				);
			}
		} catch (error) {
			console.log('Failed on adding to the cart');
		}
	};

	const onRemoveItem = async (id) => {
		try {
			setAddItem((prev) => prev.filter((item) => item.id !== id));
			await axios.delete(
				`https://64e34883bac46e480e78869c.mockapi.io/cart/${id}`
			);
		} catch (error) {
			console.log('Failed on removing from the cart');
		}
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
			value={{
				items,
				addItem,
				favorites,
				isItemAdded,
				onAddToFavorite,
				onAddToCart,
				setCartOpened,
				setAddItem,
			}}
		>
			<div className="wrapper clear">
				{/* Show Sidebar if cartOpened is true: */}
				<Sidebar
					items={addItem}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
					opened={cartOpened}
				/>
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

				<Routes>
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
