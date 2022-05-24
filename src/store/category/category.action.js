import { createAction } from '../../utils/reducer';
import { categoryTypes } from './category.types';

export const setCategories = (categoriesArray) => {
	return createAction(categoryTypes.SET_CATEGORIES, categoriesArray);
};
