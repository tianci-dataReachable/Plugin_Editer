/**
 * @file golbal data
 * @date 2021-09-06
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-06
 */
/* <------------------------ **** Complex data in the initialState type START**** ------------------------------ */
/* <------------------------ **** Complex data in the initialState type END**** ------------------------------ */

/* <------------------------------------ **** initialState type start **** ------------------------------------ */
export interface GlobalDataReducer {
    languageType: 'en' | 'cn';
}
/* <------------------------------------ **** initialState type end **** ------------------------------------ */

/* <------------------------------------ **** enum action types START **** ------------------------------------ */
export enum ACTION_TYPE {
    // change language type
    CHANGE_LANGUAGE_TYPE = 'CHANGE_LANGUAGE_TYPE',
    CHANGE_LANGUAGE_TYPE_SAGA = 'CHANGE_LANGUAGE_TYPE_SAGA',
}
/* <------------------------------------ **** enum action types END **** ------------------------------------ */

/* <------------------------------------ **** payload types START **** ------------------------------------ */
/**
 * change language type
 */
interface ChangeLanguageTypeAction {
    type: ACTION_TYPE.CHANGE_LANGUAGE_TYPE;
    payload: 'en' | 'cn';
}
interface ChangeLanguageTypeSagaAction {
    type: ACTION_TYPE.CHANGE_LANGUAGE_TYPE_SAGA;
    payload: 'en' | 'cn';
}
/* <------------------------------------ **** payload types END **** ------------------------------------ */
export type GlobalDataActionTypes = ChangeLanguageTypeAction | ChangeLanguageTypeSagaAction;

export type { ChangeLanguageTypeSagaAction };
