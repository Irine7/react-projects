function Sidebar({ onClose, onRemove, items = [] }) {
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
					<div>
						<div className="items">
							{items.map((el) => (
								<div className="cartItem d-flex align-center mb-20">
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
							<button className="greenButton">
								Make order <img src="/img/arrow.svg" alt="Arrow" />
							</button>
						</div>
					</div>
				) : (
					<div class="cartEmpty d-flex align-center justify-center flex-column flex">
						<img
							class="mb-20"
							width="120px"
							height="120px"
							src="/img/empty-cart.jpg"
							alt="Empty"
						/>
						<h2>The cart is empty </h2>
						<p class="opacity-6">
							Add at least one pare of sneakers to place an order
						</p>
						<button onClick={onClose} class="greenButton">
							<img src="/img/arrow.svg" alt="Arrow" />
							Вернуться назад
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
