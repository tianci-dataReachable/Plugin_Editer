/**
 * @file golbal data
 * @date 2021-09-08
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as types from './types';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/**
 * change language type
 * @param {'en' | 'cn'}
 */
export const ChangeLanguageTypeAction = (payload: 'en' | 'cn'): types.GlobalDataActionTypes => {
    return {
        type: types.ACTION_TYPE.CHANGE_LANGUAGE_TYPE,
        payload,
    };
};
export const ChangeLanguageTypeSagaAction = (payload: 'en' | 'cn'): types.GlobalDataActionTypes => {
    return {
        type: types.ACTION_TYPE.CHANGE_LANGUAGE_TYPE_SAGA,
        payload,
    };
};
