import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar.component.jsx';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';
import Checkout from './routes/checkout/Checkout.component.jsx';
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
