/**
 * @file actions of about login
 * @date 2021-09-15
 * @author xuejie.he
 * @lastModify xuejie.he 2021-09-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { TokenParams } from "~/Api/login";
import * as types from "./types";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/**
 * 校验code和session_state获取jwt
 */
export const firstEntryCheckSagaAction = (payload: TokenParams): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.FIRST_ENTRY_CHECK_SAGA,
    payload,
});

/**
 * 获取用户信息
 */
export const setUserInfoAction = (payload: {
    data?: { user: types.UserInfoRes };
    loading: boolean;
}): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.SET_USER_INFO,
    payload,
});
export const getUserInfoSagaAction = (): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.GET_USER_INFO_SAGA,
});

/**
 * 获取用户的所有组织
 */
export const setUserOrgListAction = (payload: {
    data?: types.OrganizationRes[];
    loading: boolean;
}): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.SET_USER_ORG_LIST,
    payload,
});
export const getUserOrgListSagaAction = (): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.GET_USER_ORG_LIST_SAGA,
});

/**
 * 校验用户status是否过期
 */
export const userActiveCheckSagaAction = (): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.USER_ACTIVE_CHECK_SAGA,
});

/**
 * 更新token loading状态
 */
export const updateTokenLoadingAction = (payload: boolean): types.LoginActionTypes => ({
    type: types.ACTION_TYPE.UPDATE_TOKEN_LOADING,
    payload,
});
