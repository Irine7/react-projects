function Card() {
	return (
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
	);
}

export default Card;
