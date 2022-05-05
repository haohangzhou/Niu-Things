import { categoryTypes } from './category.types';

/* eslint-disable indent */
export const CATEGORY_INITIAL_STATE = {
	categories: [],
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case categoryTypes.SET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		default:
			return state;
	}
};
