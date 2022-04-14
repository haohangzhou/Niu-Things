import React, { Fragment, useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/Niu.invert.svg';
import { UserContext } from '../contexts/User';
import { signOutUser } from '../utils/firebase.js';

import CartIcon from './cart-icon/CartIcon.component';

import './NavBar.scss';
const NavBar = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<div className="nav-link ">
						<Link to="shop">Shop</Link>
					</div>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<div className="nav-link ">
							<Link to="auth">Sign In</Link>
						</div>
					)}
					<CartIcon />
				</div>
			</div>

			<Outlet />
		</>
	);
};

export default NavBar;
