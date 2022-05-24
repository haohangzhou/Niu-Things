import { getCategoriesAndDocuments } from '../../utils/firebase';
import { createAction } from '../../utils/reducer';
import { categoryTypes } from './category.types';

export const fetchCategoriesStart = () =>
	createAction(categoryTypes.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(categoryTypes.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailure = (error) =>
	createAction(categoryTypes.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
	return async (dispatch) => {
		dispatch(fetchCategoriesStart());
		try {
			const categoriesArray = await getCategoriesAndDocuments(
				'categories'
			);
			dispatch(fetchCategoriesSuccess(categoriesArray));
		} catch (error) {
			dispatch(fetchCategoriesFailure(error));
		}
	};
};
