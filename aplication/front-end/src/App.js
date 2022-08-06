import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/registration';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="registration" element={ <Registration /> } />
			</Routes>
		</div>
	);
}

export default App;
