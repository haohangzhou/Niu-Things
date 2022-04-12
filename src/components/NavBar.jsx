import React, { Fragment } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/Niu.invert.svg';
import './NavBar.scss';
const NavBar = () => {
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
					<div className="nav-link ">
						<Link to="sign-in">Sign In</Link>
					</div>
				</div>
			</div>

			<Outlet />
		</>
	);
};

export default NavBar;
