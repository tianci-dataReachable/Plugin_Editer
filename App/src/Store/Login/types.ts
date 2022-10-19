/**
 * @file  type of project data
 * @date 2021-09-06
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-06
 */

import { TokenParams } from "~/Api/login";

/* <------------------------ **** Complex data in the initialState type START**** ------------------------------ */
export interface MobileRes {
    area?: string;
    country?: string;
    number?: string;
}

export interface RealNameRes {
    first_name: string;
    middle_name: string;
    last_name: string;
}

export interface OrganizationRes {
    id: string;
    logo: string;
    name: string;
    type: string;
    description: string;
    organization_role: StreamPipeOptions;
}

export interface UserInfoRes {
    id: string;
    avatar: string;
    birthday: string;
    email: string;
    gender: string;
    dri: string;
    name: string;
    real_name: RealNameRes;
    mobile: MobileRes;
}
/* <------------------------ **** Complex data in the initialState type END**** ------------------------------ */
/* <------------------------------------ **** initialState type start **** ------------------------------------ */
export interface LoginReducer {
    userInfo: {
        data: UserInfoRes | null;
        loading: boolean;
    };
    organization: {
        data: OrganizationRes[];
        loading: boolean;
    };
    tokenLoading: boolean;
}
/* <------------------------------------ **** initialState type end **** ------------------------------------ */

/* <------------------------------------ **** enum action types START **** ------------------------------------ */
export enum ACTION_TYPE {
    // 校验code和session_state获取jwt
    FIRST_ENTRY_CHECK_SAGA = "FIRST_ENTRY_CHECK_SAGA",
    // 校验用户status是否过期
    USER_ACTIVE_CHECK_SAGA = "USER_ACTIVE_CHECK_SAGA",
    // 获取用户信息
    SET_USER_INFO = "SET_USER_INFO",
    GET_USER_INFO_SAGA = "GET_USER_INFO_SAGA",
    // 获取用户的所有组织
    SET_USER_ORG_LIST = "SET_USER_ORG_LIST",
    GET_USER_ORG_LIST_SAGA = "GET_USER_ORG_LIST_SAGA",
    // 更新token loading状态
    UPDATE_TOKEN_LOADING = "UPDATE_TOKEN_LOADING",
}
/* <------------------------------------ **** enum action types END **** ------------------------------------ */

/* <------------------------------------ **** payload types START **** ------------------------------------ */

/* <------------------------------------ **** payload types END **** ------------------------------------ */
/**
 * 校验code和session_state获取jwt
 */
interface FirstEntryCheckSagaAction {
    type: ACTION_TYPE.FIRST_ENTRY_CHECK_SAGA;
    payload: TokenParams;
}

/**
 * 校验用户status是否过期
 */
interface UserActiveCheckSagaAction {
    type: ACTION_TYPE.USER_ACTIVE_CHECK_SAGA;
}

/**
 * 获取用户信息
 */
interface SetUserInfoAction {
    type: ACTION_TYPE.SET_USER_INFO;
    payload: { data?: { user: UserInfoRes }; loading: boolean };
}
interface GetUserInfoSagaAction {
    type: ACTION_TYPE.GET_USER_INFO_SAGA;
}

/**
 * 获取用户的所有组织
 */
interface SetUserOrgListAction {
    type: ACTION_TYPE.SET_USER_ORG_LIST;
    payload: { data?: OrganizationRes[]; loading: boolean };
}
interface GetUserOrgListSagaAction {
    type: ACTION_TYPE.GET_USER_ORG_LIST_SAGA;
}

/**
 * 更新token loading状态
 */
interface UpdateTokenLoadingAction {
    type: ACTION_TYPE.UPDATE_TOKEN_LOADING;
    payload: boolean;
}

export type LoginActionTypes =
    | FirstEntryCheckSagaAction
    | SetUserInfoAction
    | GetUserInfoSagaAction
    | UpdateTokenLoadingAction
    | SetUserOrgListAction
    | GetUserOrgListSagaAction
    | UserActiveCheckSagaAction;

export type {
    FirstEntryCheckSagaAction,
    GetUserInfoSagaAction,
    GetUserOrgListSagaAction,
    UserActiveCheckSagaAction,
};
