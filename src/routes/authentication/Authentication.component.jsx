import React from 'react';
import SignInForm from '../../components/sign-in-form/SignInForm.component';
import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
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
