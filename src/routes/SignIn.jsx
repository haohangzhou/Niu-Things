import React from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import TestForm from '../components/TestForm.jsx';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../utils/firebase.js';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h2>Sign in with Google</h2>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
