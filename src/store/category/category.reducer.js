import { categoryTypes } from './category.types';

/* eslint-disable indent */
export const CATEGORY_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case categoryTypes.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };

		case categoryTypes.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				categories: payload,
				isLoading: false,
			};

		case categoryTypes.FETCH_CATEGORIES_FAILED:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
