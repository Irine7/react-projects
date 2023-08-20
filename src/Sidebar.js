function Sidebar() {
	return (
		<div className="overlay">
			<div className="sidebar">
				<h2 className="d-flex justify-between mb-30">
					Cart
					<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
				</h2>

				<div className="items">
					<div className="cartItem d-flex align-center mb-20">
						<div
							className="cartItemImg"
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
						></div>
						<div className="mr-20 flex">
							<p className="mb-5">Male sneakers Nike Air Max 270</p>
							<b>70€</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
					<div className="cartItem d-flex align-center">
						<div
							className="cartItemImg"
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
						></div>
						<div className="mr-20 flex">
							<p className="mb-5">Male sneakers Nike Air Max 270</p>
							<b>70€</b>
						</div>
						<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
					</div>
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
		</div>
	);
}

export default Sidebar;
