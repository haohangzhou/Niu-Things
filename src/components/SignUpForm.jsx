import { async } from '@firebase/util';
import React, { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../utils/firebase.js';
import InputField from './InputField.jsx';

const initialValue = {
	displayName: '',
	email: '',
	passwords: '',
	confirmPasswords: '',
};

const SignUpForm = () => {
	const [formField, setFormField] = useState(initialValue);
	const { displayName, email, passwords, confirmPasswords } = formField;
	console.log(formField);

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
		if (passwords != confirmPasswords) {
			alert('passwords do not match');
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				passwords
			);

			await createUserDocumentFromAuth(user, { displayName });

			console.log(user);
			resetForm();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('email already in use');
			}
			console.log('user creation error' + error);
		}
	};
	return (
		<>
			<h1>Sign up with your email</h1>
			<form onSubmit={handleSubmit}>
				<InputField
					label="Display Name"
					name="displayName"
					type="text"
					required
					onChange={handleChange}
					value={displayName}
				/>

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

				<InputField
					label="Confirm Passwords"
					name="confirmPasswords"
					type="password"
					required
					onChange={handleChange}
					value={confirmPasswords}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
};

export default SignUpForm;
