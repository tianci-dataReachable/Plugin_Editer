/**
 * @file reducer of task info page
 * @date 2021-09-08
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-08
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as types from './types';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
const initialState: types.GlobalDataReducer = {
    languageType: 'en',
};

export default (
    state = initialState,
    action: types.GlobalDataActionTypes,
): types.GlobalDataReducer => {
    const data = { ...state };
    switch (action.type) {
        case types.ACTION_TYPE.CHANGE_LANGUAGE_TYPE:
            data.languageType = action.payload;
            return { ...data };
        default:
            return { ...data };
    }
};
