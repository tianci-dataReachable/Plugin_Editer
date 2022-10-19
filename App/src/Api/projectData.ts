/**
 * @file proejct infomation api
 * @date 2021-09-10
 * @author zhang chongzhi
 * @lastModify  zhang chongzhi 2021-09-10
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { AxiosRequestConfig } from "axios";
import axios, { allPendingRequestsRecord, CustomAxiosResponse, removeRequest } from "./interceptor";
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** API RESPONSE START **** ------------------------------------ */
/* <------------------------------------ **** API RESPONSE END **** ------------------------------------ */
/* <------------------------------------ **** API START **** ------------------------------------ */
/**
 * 客户中心获取project列表
 */
export const getClientProjectList = (data: { org_id: string }): Promise<CustomAxiosResponse> => {
    const requestConfig: AxiosRequestConfig = {
        method: "get",
        url: "/project/findByOrg",
        params: data,
    };
    const request = allPendingRequestsRecord.find((item) =>
        JSON.stringify(item).includes(JSON.stringify(requestConfig)),
    );
    request && removeRequest(request);
    return axios.request({
        ...requestConfig,
    });
};

/**
 * 游客获取project详情数据
 */
export const getPubProjectDetail = (data: { id: string }): Promise<CustomAxiosResponse> => {
    const requestConfig: AxiosRequestConfig = {
        method: "get",
        url: "/pub/project/detail",
        params: data,
    };
    const request = allPendingRequestsRecord.find((index) =>
        JSON.stringify(index).includes(JSON.stringify(requestConfig)),
    );
    // cancel request
    request && removeRequest(request);
    return axios.request({
        ...requestConfig,
    });
};

/**
 * 登录用户获取project详情数据
 */
export const getLoginProjectDetail = (data: { dri: string }): Promise<CustomAxiosResponse> => {
    const requestConfig: AxiosRequestConfig = {
        method: "get",
        url: "/project/detail",
        params: data,
    };
    const request = allPendingRequestsRecord.find((index) =>
        JSON.stringify(index).includes(JSON.stringify(requestConfig)),
    );
    // cancel request
    request && removeRequest(request);
    return axios.request({
        ...requestConfig,
    });
};

/**
 * User gets project information published from spm on the publish page
 */
export const getManagementProjectInfo = (data: {
    project: string;
}): Promise<CustomAxiosResponse> => {
    return axios.request({
        method: "get",
        url: "/pm/project/detail",
        params: data,
    });
};

/**
 * User gets market project infomation on the publish page
 */
export const getMarketProjectInfo = (data: { id: string }): Promise<CustomAxiosResponse> => {
    return axios.request({
        method: "get",
        url: "/project/one",
        params: data,
    });
};
/* <------------------------------------ **** API END **** ------------------------------------ */
