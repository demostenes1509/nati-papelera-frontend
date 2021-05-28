import { fork, take } from 'redux-saga/effects';
import { defaultFetch } from '../../../../helpers/SagasUtil';
import Actions, { CategoriesGetAllActions } from './CategoryActions';
import CategoriesApi from './CategoryApi';

/* --------------------- Watchers ------------------ */

const watchCategoryGetAll = function* () {
  while (true) {
    yield take(CategoriesGetAllActions.FETCH);
    yield fork(() => defaultFetch(Actions, CategoriesApi));
  }
};

export default { watchCategoryGetAll };
