/**
 * @file reducer of about login
 * @date 2021-09-15
 * @author xuejie.he
 * @lastModify xuejie.he 2021-09-15
 */
import * as types from "./types";
const initState: types.LoginReducer = {
    userInfo: {
        data: null,
        loading: true,
    },
    organization: {
        data: [],
        loading: true,
    },
    /**
     * login status
     * @param {loading:调用登录接口请求状态:{false:请求完成,true:未请求}}, data:用户信息}
     */
    tokenLoading: !window.localStorage.getItem("jwt"),
};

export default (state = initState, actions: types.LoginActionTypes): types.LoginReducer => {
    const data = { ...state };
    switch (actions.type) {
        case types.ACTION_TYPE.SET_USER_INFO:
            data.userInfo.data = actions.payload.data?.user ?? null;
            data.userInfo.loading = actions.payload.loading;
            return { ...data };
        case types.ACTION_TYPE.SET_USER_ORG_LIST:
            data.organization.data = actions.payload.data ?? [];
            data.organization.loading = actions.payload.loading;
            return { ...data };
        case types.ACTION_TYPE.UPDATE_TOKEN_LOADING:
            data.tokenLoading = actions.payload;
            return { ...data };
        default:
            return { ...data };
    }
};
