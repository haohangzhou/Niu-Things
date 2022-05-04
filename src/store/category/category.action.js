import { createAction } from '../../utils/reducer';
import { categoryTypes } from './category.types';

export const setCategoriesMap = (newCategoriesMap) => {
	return createAction(categoryTypes.SET_CATEGORIES_MAP, newCategoriesMap);
};
