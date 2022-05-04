import { categoryTypes } from './category.types';

/* eslint-disable indent */
export const CATEGORY_INITIAL_STATE = {
	categoriesMap: {},
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case categoryTypes.SET_CATEGORIES_MAP:
			return {
				...state,
				categoriesMap: payload,
			};
		default:
			return state;
	}
};
