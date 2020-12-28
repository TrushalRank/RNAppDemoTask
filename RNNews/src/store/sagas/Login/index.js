import { takeLatest, put, call } from "redux-saga/effects";

import { TAB1_WATCHER, TAB2_WATCHER, TAB3_WATCHER, TAB4_WATCHER, TAB5_WATCHER } from "../../constant";

import {
    tab1Error, tab1Success, tab2Error, tab2Success,
    tab3Error, tab3Success, tab4Error, tab4Success, tab5Error, tab5Success,
} from "../../actions";

// import { API_URL, BASE_URL } from "../../services";

// 83e51e732e30406c8396ad8a0419dd5f
const key = '83e51e732e30406c8396ad8a0419dd5'

function* onUserLogin(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;
    const data = payload.data
    try {

        const response = yield fetch(`http://newsapi.org/v2/everything?q=apple&from=2020-12-23&to=2020-12-25&sortBy=${data}&apiKey=${key}`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(tab1Success(response));
        resolve(response);
    } catch (e) {
        yield put(tab1Error(e));
        reject(e);
    }
}

function* onUserLogin1(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;
    // console.log(JSON.stringify(payload))
    try {
        const response = yield fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(tab2Success(response));
        resolve(response);
    } catch (e) {
        yield put(tab2Error(e));
        reject(e);
    }
}

function* onUserLogin2(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;
    // console.log(JSON.stringify(payload))
    try {
        const response = yield fetch(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`, {
        method: "GET",
        }).then((res) => res.json());

    yield put(tab3Success(response));
    resolve(response);
} catch (e) {
    yield put(tab3Error(e));
    reject(e);
}
}

function* onUserLogin3(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;
    // console.log(JSON.stringify(payload))
    const data = payload.data1 
    try {
        const header = { "Content-Type": "application/json" };
        const response = yield fetch(`http://newsapi.org/v2/top-headlines?country=${data}&category=business&apiKey=${key}`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(tab4Success(response));
        resolve(response);
    } catch (e) {
        yield put(tab4Error(e));
        reject(e);
    }
}

function* onUserLogin4(userLoginResendCodeAction) {
    let { payload, resolve, reject } = userLoginResendCodeAction;
    // console.log(JSON.stringify(payload))
    try {
        const response = yield fetch(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-28&sortBy=publishedAt&apiKey=${key}`, {
            method: "GET",
        }).then((res) => res.json());

        yield put(tab5Success(response));
        resolve(response);
    } catch (e) {
        yield put(tab5Error(e));
        reject(e);
    }
}


export function* userLoginActionWatcher() {
    yield takeLatest(TAB1_WATCHER, onUserLogin);
    yield takeLatest(TAB2_WATCHER, onUserLogin1);
    yield takeLatest(TAB3_WATCHER, onUserLogin2);
    yield takeLatest(TAB4_WATCHER, onUserLogin3);
    yield takeLatest(TAB5_WATCHER, onUserLogin4);
}