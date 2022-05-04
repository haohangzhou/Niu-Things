/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React, { useEffect, createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer.js';

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from '../utils/firebase';

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
	SET_CURRETN_USER: 'SET_CURRETN_USER',
};

const UserReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRETN_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`Invalid action type ${type}`);
	}
};

const INITIAL_STATE = { currentUser: null };

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
	const { currentUser } = state;

	const setCurrentUser = (user) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRETN_USER, user));
	};

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
