import Card from './components/Card';
import Header from './components/Header';
import Sidebar from './Sidebar';

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
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
