import React from 'react';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { UserProvider } from './contexts/User.context';
import { ProductsContextProvider } from './contexts/Product.context.jsx';
import { CartProvider } from './contexts/Cart.context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsContextProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsContextProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
