/**
 * @file sagas of task detail page
 * @date 2021-06-29
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-06-29
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */

import { fork, takeLatest, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/**
 * change language type
 * @param {}
 */
function* handleChangeLanguage(action: types.ChangeLanguageTypeSagaAction) {
    yield put(actions.ChangeLanguageTypeAction(action.payload));
}

function* watchSagaAction() {
    yield takeLatest(types.ACTION_TYPE.CHANGE_LANGUAGE_TYPE_SAGA, handleChangeLanguage);
}
const saga = [fork(watchSagaAction)];
export default saga;
