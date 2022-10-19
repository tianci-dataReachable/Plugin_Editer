/**
 * @file sagas of about login
 * @date 2021-09-15
 * @author xuejie.he
 * @lastModify xuejie.he 2021-09-15
 */
import { call, takeLatest, fork, put } from "redux-saga/effects";
import { firstEntryCheck, getUserInfo, getUserOrgList, userActiveCheck } from "~/Api/login";
import * as types from "./types";
import * as actions from "./actions";
import { message } from "@datareachable/dr_front_componentlibrary";
import { CustomAxiosResponse } from "~/Api/interceptor";

/**
 * 校验code和session_state获取jwt
 */
function* handleFirstEntryCheck(action: types.FirstEntryCheckSagaAction) {
    yield put(actions.updateTokenLoadingAction(true));
    const res: CustomAxiosResponse = yield call(firstEntryCheck, action.payload);
    if (res) {
        if (res.status === 200) {
            if (res.headers["dr-auth"]) {
                window.localStorage.setItem("jwt", res.headers["dr-auth"]);
                yield put(actions.updateTokenLoadingAction(false));
            }
        } else {
            yield put(actions.updateTokenLoadingAction(false));
            message.auto({ type: "error", content: res.data?.message });
        }
    }
}

/**
 * 校验用户status是否过期
 */
function* handleUserActiveCheck() {
    const res: CustomAxiosResponse = yield call(userActiveCheck);
    if (res) {
        if (res.status === 200) {
            // 每次检测jwt通过时获取用户信息和组织信息
            yield put(actions.getUserInfoSagaAction());
            yield put(actions.getUserOrgListSagaAction());
        } else {
            window.localStorage.removeItem("jwt");
            // jwt检验失败清除用户信息和组织信息
            yield put(actions.setUserInfoAction({ loading: false }));
            yield put(actions.setUserOrgListAction({ data: undefined, loading: false }));
            message.auto({
                type: "error",
                content: res.data?.message,
            });
        }
    }
}

/**
 * 获取用户信息
 */
function* handleGetUserInfo() {
    yield put(actions.setUserInfoAction({ loading: true }));
    const res: CustomAxiosResponse<{ user: types.UserInfoRes }> = yield call(getUserInfo);
    if (res) {
        if (res.status === 200) {
            yield put(actions.setUserInfoAction({ data: res.data.data, loading: false }));
        } else {
            yield put(actions.setUserInfoAction({ loading: false }));
            message.auto({
                type: "error",
                content: res.data.message,
            });
        }
    }
}

/**
 * 获取用户的所有组织
 */
function* handleGetUserOrgList() {
    yield put(actions.setUserOrgListAction({ loading: true }));
    const res: CustomAxiosResponse<{ organizations: types.OrganizationRes[] }> = yield call(
        getUserOrgList,
    );
    if (res) {
        if (res.status === 200) {
            yield put(
                actions.setUserOrgListAction({
                    data: res.data.data?.organizations,
                    loading: false,
                }),
            );
        } else {
            yield put(actions.setUserOrgListAction({ loading: false }));
            message.right({
                type: "error",
                content: res.data.message,
            });
        }
    }
}

function* watchActionSagas() {
    yield takeLatest(types.ACTION_TYPE.FIRST_ENTRY_CHECK_SAGA, handleFirstEntryCheck);
    yield takeLatest(types.ACTION_TYPE.USER_ACTIVE_CHECK_SAGA, handleUserActiveCheck);
    yield takeLatest(types.ACTION_TYPE.GET_USER_INFO_SAGA, handleGetUserInfo);
    yield takeLatest(types.ACTION_TYPE.GET_USER_ORG_LIST_SAGA, handleGetUserOrgList);
}

const saga = [fork(watchActionSagas)];

export default saga;
