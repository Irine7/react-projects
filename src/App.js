import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './Sidebar';

const arr = [
	{
		title: 'Male sneakers Nike Blazer Mid Suede',
		price: 70,
		img: 'img/sneakers/1.jpg',
	},
	{ title: 'Male sneakers Nike Air Max', price: 85, img: 'img/sneakers/2.jpg' },
	{
		title: 'Male sneakers Nike Blazer Mid Suede',
		price: 65,
		img: 'img/sneakers/3.jpg',
	},
	{
		title: 'Male sneakers Puma X Aka Boku Future Rider',
		price: 55,
		img: 'img/sneakers/4.jpg',
	},
];

function App() {
	return (
		<div className="wrapper clear">
			<Sidebar />
			<Header />
			<div className="cotent p-40">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>All sneakers</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="Search" />
						<input placeholder="Search..." />
					</div>
				</div>

				<div className="d-flex justify-center">
					{arr.map((el) => (
						<Card title={el.title} price={el.price} img={el.img} showPrice={() => alert(el.price)} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
