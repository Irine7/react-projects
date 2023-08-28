import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';

function Orders() {
	const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					'https://64e6694009e64530d17ff937.mockapi.io/orders'
				);
				// console.log(data.map((obj) => obj.items).flat());
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);
			} catch (error) {
				console.log('Error of ordering');
			}
		}
		fetchData();
	}, []);
	return (
		<div className="content p-40">
			<div className="d-flex align-center mb-40 justify-between">
				<h1>My orders</h1>
			</div>
			<div className="d-flex flex-wrap justify-center">
				{(isLoading ? [...Array(12)] : orders).map((el, index) => (
					<Card key={index} loading={isLoading} {...el} />
				))}
			</div>
		</div>
	);
}

export default Orders;
