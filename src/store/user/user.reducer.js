/* eslint-disable indent */
const USER_ACTION_TYPES = {
	SET_CURRETN_USER: 'SET_CURRETN_USER',
};

const INITIAL_STATE = { currentUser: null };

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRETN_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			state;
	}
};
