import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
	const { totalSum } = useCart();

	return (
		<header className="d-flex justify-between align-center p-40">
			<Link to="/">
				<div className="d-flex align-center">
					<img src="/img/logo.png" width={40} height={40} />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Best sneakers shop</p>
					</div>
				</div>
			</Link>
			<ul className="d-flex">
				<li className="mr-30 cu-p" onClick={props.onClickCart}>
					<img src="/img/cart.svg" width={17} height={17} alt="Cart" />
					<span>{totalSum}€</span>
				</li>
				<li className="mr-20 cu-p">
					<Link to="/favorites">
						<img src="/img/heart.svg" width={17} height={17} alt="Favorites" />
					</Link>
				</li>
				<li>
					<img src="/img/user.svg" width={17} height={17} alt="User" />
				</li>
			</ul>
		</header>
	);
}
export default Header;
