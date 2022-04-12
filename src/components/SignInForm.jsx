/* eslint-disable indent */
import { async } from '@firebase/util';
import React, { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../utils/firebase.js';

import InputField from './InputField.jsx';
import Button from './Button.jsx';

import './SignInForm.scss';

const initialValue = {
	email: '',
	passwords: '',
};

const SignInForm = () => {
	const [formField, setFormField] = useState(initialValue);
	const { email, passwords } = formField;

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const resetForm = () => {
		setFormField(initialValue);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormField({
			...formField,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				passwords
			);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('wrong passwords or email');
					break;
				case 'auth/user-not-found':
					alert('no user found');
					break;
				default:
					console.log(error);
					break;
			}
		}
		resetForm();
	};
	return (
		<div className="sign-up-form-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email</span>
			<form onSubmit={handleSubmit}>
				<InputField
					label="Email"
					name="email"
					type="email"
					required
					onChange={handleChange}
					value={email}
				/>

				<InputField
					label="Passwords"
					name="passwords"
					type="password"
					required
					onChange={handleChange}
					value={passwords}
				/>
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						buttonType="google"
						type="button"
						onClick={signInWithGoogle}
					>
						Sign In with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
