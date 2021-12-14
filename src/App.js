import './App.css';
import Home from './Containers/Home';
import About from './Containers/about';
import NotFound from './Containers/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
