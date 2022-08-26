import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Saved from './pages/Saved';
import Search from './pages/Search';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={ <Dashboard /> }>
				<Route path="/" element={ <Home /> } />
				<Route path="/search" element={ <Search /> } />
				<Route path="/saved" element={ <Saved /> } />
			</Route>
			<Route path="/login" element={ <Login /> } />
		</Routes>
	);
};
