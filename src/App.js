import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Authentication from './routes/Authentication';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
