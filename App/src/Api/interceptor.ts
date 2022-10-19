/**
 * @file  profile page api
 * @date 2021-1-13
 * @author Jack
 * @lastModify  2021-1-13
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { message } from "@datareachable/dr_front_componentlibrary";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Canceler } from "axios";
import mainDomain, {
    commonAuthServiceUrl,
    marketApp,
    oidcServiceUrl,
    profileServiceUrl,
} from "./mainDomain";
import { redirectToSignInPage } from "./redirectDomain";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CustomAxiosResponse<T = any> = AxiosResponse<{
    code: number;
    message: string;
    data?: T;
}> | void;

// create a axios instanse
const service = axios.create({
    baseURL: mainDomain, // api base_url
    timeout: 10_000, // request timeout
});

// cancel request
export let allPendingRequestsRecord: (AxiosRequestConfig & {
    c: Canceler;
})[] = [];

/**
 * Ignored request
 * 切换路由不会被终止
 */
export const ignoredRequest = [
    // 获取组织
    `${profileServiceUrl}/orgs/detail/by_user`,
    // 获取用户信息
    `${profileServiceUrl}/user_self/info`,
    // 获取token
    `${oidcServiceUrl}/jwt?app=${marketApp}`,
    // 校验token
    `${commonAuthServiceUrl}/session/status`,
];

// clear all request
export const clearRequestList = (): void => {
    for (let i = 0; i < allPendingRequestsRecord.length; ) {
        allPendingRequestsRecord[i].c();
        ++i;
    }
    allPendingRequestsRecord = [];
};

// remove request
export const removeRequest = (config: AxiosRequestConfig): void => {
    const n = allPendingRequestsRecord.findIndex((index) => {
        let state = true;
        for (const key in config) {
            if (config[key] === index[key]) {
                true;
            } else {
                state = false;
                break;
            }
        }
        if (state) {
            index.c();
        }
        return state;
    });
    allPendingRequestsRecord.splice(n, 1);
};

// request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (window.navigator.onLine === false) {
            throw new axios.Cancel("The network status is not good, please check your network");
        }
        const jwt = window.localStorage.getItem("jwt");
        if (jwt) {
            config.headers = Object.assign({}, config.headers, { ["DR-AUTH"]: jwt });
        }
        if (!ignoredRequest.some((index) => config.url && config.url.indexOf(index) >= 0)) {
            config.cancelToken = new axios.CancelToken((c) => {
                allPendingRequestsRecord.push({
                    data: config.data,
                    method: config.method,
                    url: config.url,
                    params: config.params,
                    c,
                });
            });
        }
        return config;
    },
    (error: AxiosError) => {
        // console.log("request error-->", error); // for debug
        return error;
    },
);

// response interceptors
service.interceptors.response.use(
    (response: AxiosResponse<{ code: number; message: string }>) => {
        // console.log("response-->", response);
        if (response.data.code === 403_001 || response.data.code === 401_001) {
            window.localStorage.removeItem("jwt");
            if (process.env.NODE_ENV && ["v2_test", "v2_dev"].includes(process.env.NODE_ENV)) {
                window.location.replace(redirectToSignInPage);
            }
        }
        return response;
    },
    (error: AxiosError) => {
        /**
         * Filter out all requests that are not cancelled by themselves
         */
        if (axios.isCancel(error)) {
            error.message &&
                message.auto({
                    type: "error",
                    content: error.message,
                });
        } else {
            return error;
        }
    },
);

export default service;
