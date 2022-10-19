/**
 * @file task infomation api
 * @date 2021-09-10
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import axios, { CustomAxiosResponse } from "./interceptor";
import { commonAuthServiceUrl, marketApp, oidcServiceUrl, profileServiceUrl } from "./mainDomain";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** API RESPONSE START **** ------------------------------------ */
/* <------------------------------------ **** API RESPONSE END **** ------------------------------------ */
/* <------------------------------------ **** REQUEST TYPE START **** ------------------------------------ */
export interface TokenParams {
    code: string;
    session_state: string;
}
/* <------------------------------------ **** REQUEST TYPE END **** ------------------------------------ */
/* <------------------------------------ **** API START **** ------------------------------------ */
/**
 * 获取jwt
 */
export const firstEntryCheck = (data: TokenParams): Promise<CustomAxiosResponse> => {
    return axios.request({
        url: `${oidcServiceUrl}/jwt?app=${marketApp}`,
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        data,
    });
};

/**
 * type description
 * @param { type } var description
 */
export const userActiveCheck = (): Promise<CustomAxiosResponse> => {
    return axios.request({
        method: "post",
        url: `${commonAuthServiceUrl}/session/status`,
    });
};

/**
 * 获取用户信息接口
 */
export const getUserInfo = (): Promise<CustomAxiosResponse> => {
    return axios.request({
        method: "post",
        url: `${profileServiceUrl}/user_self/info`,
    });
};

/**
 * 获取组织接口
 */
export const getUserOrgList = (): Promise<CustomAxiosResponse> => {
    return axios.request({
        method: "post",
        url: `${profileServiceUrl}/org/role/by_user`,
    });
};

/* <------------------------------------ **** API END **** ------------------------------------ */
