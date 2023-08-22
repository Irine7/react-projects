function Header(props) {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img src="/img/logo.png" width={40} height={40} />
				<div>
					<h3 className="text-uppercase">React Sneakers</h3>
					<p className="opacity-5">Best sneakers shop</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30 cu-p" onClick={props.onClickCart}>
					<img src="/img/cart.svg" width={17} height={17} />
					<span>50€</span>
				</li>
				<li>
					<img src="/img/user.svg" width={17} height={17} />
				</li>
			</ul>
		</header>
	);
}
export default Header;
