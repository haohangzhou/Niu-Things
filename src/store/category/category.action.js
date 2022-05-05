import { createAction } from '../../utils/reducer';
import { categoryTypes } from './category.types';

export const setCategories = (newCategories) => {
	return createAction(categoryTypes.SET_CATEGORIES, newCategories);
};
