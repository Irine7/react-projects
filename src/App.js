function App() {
	return (
		<div className="wrapper clear">
			<div className="overlay">
				<div className="side-bar">
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
							<img
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="Remove"
							/>
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
							<img
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="Remove"
							/>
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

			<header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img src="/img/logo.png" width={40} height={40} />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Best sneakers shop</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img src="/img/cart.svg" width={17} height={17} />
						<span>50€</span>
					</li>
					<li>
						<img src="/img/user.svg" width={17} height={17} />
					</li>
				</ul>
			</header>
			<div className="cotent p-40">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>All sneakers</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="Search" />
						<input placeholder="Search..." />
					</div>
				</div>

				<div className="d-flex justify-center">
					<div className="card">
						<div className="favorite">
							<img src="/img/unliked.svg" alt="Unliked" />
						</div>
						<img src="img/sneakers/1.jpg" width={133} height={112} alt="Card" />
						<p>Male sneakers Nike Blazer Mid Suede</p>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Price:</span>
								<b>70€</b>
							</div>
							<button className="button">
								<img src="img/plus.svg" width={11} height={11} alt="Plus"></img>
							</button>
						</div>
					</div>

					<div className="card">
						<img src="img/sneakers/2.jpg" width={133} height={112} alt="Card" />
						<p>Male sneakers Nike Blazer Mid Suede</p>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Price:</span>
								<b>70€</b>
							</div>
							<button className="button">
								<img src="img/plus.svg" width={11} height={11} alt="Plus"></img>
							</button>
						</div>
					</div>

					<div className="card">
						<img src="img/sneakers/3.jpg" width={133} height={112} alt="Card" />
						<p>Male sneakers Nike Blazer Mid Suede</p>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Price:</span>
								<b>70€</b>
							</div>
							<button className="button">
								<img src="img/plus.svg" width={11} height={11} alt="Plus"></img>
							</button>
						</div>
					</div>

					<div className="card">
						<img src="img/sneakers/4.jpg" width={133} height={112} alt="Card" />
						<p>Male sneakers Nike Blazer Mid Suede</p>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Price:</span>
								<b>70€</b>
							</div>
							<button className="button">
								<img src="img/plus.svg" width={11} height={11} alt="Plus"></img>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
