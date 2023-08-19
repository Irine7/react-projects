function App() {
	return (
		<div className="wrapper clear">
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
				<h1 className="mb-40">All sneakers</h1>

				<div className="d-flex">
					<div className="card">
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
