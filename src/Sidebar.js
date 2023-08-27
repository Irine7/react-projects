import axios from 'axios';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Info from './components/Info';
import AppContext from './context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Sidebar({ onClose, onRemove, items = [] }) {
	const { addItem, setAddItem } = React.useContext(AppContext);
	const [orderId, setOrderId] = React.useState(null);
	const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				'https://64e6694009e64530d17ff937.mockapi.io/orders',
				{
					items: addItem,
				}
			);
			setOrderId(data.id);
			setIsOrderCompleted(true);
			setAddItem([]); // Clear the cart after making an order

			for (let i = 0; i < addItem.length; i++) {
				const item = addItem[i];
				await axios.delete(
					'https://64e34883bac46e480e78869c.mockapi.io/cart' + item.id
				);
				await delay(1000);
			}
		} catch (error) {
			console.log('Failure during creating an order');
		}
		setIsLoading(false);
	};

	return (
		<div className="overlay">
			<div className="sidebar">
				<h2 className="d-flex justify-between mb-30">
					Cart
					<img
						className="removeBtn"
						src="/img/btn-remove.svg"
						alt="Close"
						onClick={onClose}
					/>
				</h2>

				{/* Show items if there is at least one item added. Show the empty cart if there is nothing: */}
				{items.length > 0 ? (
					<div className="d-flex flex-column flex">
						<div className="items">
							{items.map((el) => (
								<div
									key={uuidv4()}
									className="cartItem d-flex align-center mb-20"
								>
									<div
										className="cartItemImg"
										style={{ backgroundImage: `url(${el.img})` }}
									></div>
									<div className="mr-20 flex">
										<p className="mb-5">{el.title}</p>
										<b>{el.price} €</b>
									</div>
									<img
										onClick={() => onRemove(el.id)}
										className="removeBtn"
										src="/img/btn-remove.svg"
										alt="Remove"
									/>
								</div>
							))}
						</div>
						<div className="cartTotalBlock">
							<ul>
								<li>
									<span>In total:</span>
									<div></div>
									<b>140€</b>
								</li>
								<li>
									<span>Tax:</span>
									<div></div>
									<b>7€</b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								onClick={onClickOrder}
								className="greenButton"
							>
								Make an order <img src="/img/arrow.svg" alt="Arrow" />
							</button>
						</div>
					</div>
				) : (
					<Info
						title={
							isOrderCompleted
								? 'The order has been placed'
								: ' The cart is empty'
						}
						description={
							isOrderCompleted
								? `Your order #${orderId} will be handed over to the courier service soon`
								: 'Add at least one pare of sneakers to place an order'
						}
						image={
							isOrderCompleted
								? '/img/complete-order.jpg'
								: '/img/empty-cart.jpg'
						}
					/>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
