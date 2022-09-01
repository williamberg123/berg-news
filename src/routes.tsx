import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContextType } from './@types/authType';
import { AuthContext } from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Saved from './pages/Saved';
import Search from './pages/Search';

export const AppRoutes = () => {
	const { user } = useContext(AuthContext) as AuthContextType;

	return (
		<Routes>
			<Route path="/" element={ user ? <Dashboard /> : <Navigate to="/login" /> }>
				<Route path="/" element={ <Home /> } />
				<Route path="/search" element={ <Search /> } />
				<Route path="/saved" element={ <Saved /> } />
			</Route>
			<Route path="/login" element={ !user ? <Login /> : <Navigate to="/" /> } />
			<Route path="*" element={ <NotFound /> } />
		</Routes>
	);
};
