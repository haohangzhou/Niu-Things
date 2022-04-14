import React, { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase';

import InputField from '../input-field/InputField';
import Button from '../button/Button';

import './SignUpForm.scss';

const initialValue = {
	displayName: '',
	email: '',
	passwords: '',
	confirmPasswords: '',
};

const SignUpForm = () => {
	const [formField, setFormField] = useState(initialValue);
	const { displayName, email, passwords, confirmPasswords } = formField;

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
			resetForm();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('email already in use');
			}
			console.log('user creation error' + error);
		}
	};
	return (
		<div className="sign-up-form-container">
			<h2>Don&lsquo;t have an account?</h2>
			<span>Sign up with your email</span>
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
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
