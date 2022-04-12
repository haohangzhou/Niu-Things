import React from 'react';
import SignInForm from '../components/SignInForm.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import './Authentication.scss';

const Authentication = () => {
	return (
		<div className="authentication-container">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
