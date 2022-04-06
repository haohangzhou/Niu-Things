import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import SignIn from './routes/SignIn';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
