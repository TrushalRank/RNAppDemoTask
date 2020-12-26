import {
    TAB1_SUCCESS,
    TAB1_FAILURE,
    TAB1_WATCHER,
    TAB2_SUCCESS,
    TAB2_FAILURE,
    TAB2_WATCHER,
    TAB3_SUCCESS,
    TAB3_FAILURE,
    TAB3_WATCHER,
    TAB4_SUCCESS,
    TAB4_FAILURE,
    TAB4_WATCHER,
    TAB5_SUCCESS,
    TAB5_FAILURE,
    TAB5_WATCHER,
} from '../../constant';

export function tab1Watcher(payload, resolve, reject) {
    return { type: TAB1_WATCHER, payload, resolve, reject };
}

export function tab1Success(payload) {
    return { type: TAB1_SUCCESS, payload: payload };
}

export function tab1Error(error) {
    return { type: TAB1_FAILURE, payload: error };
}

export function tab2Watcher(payload, resolve, reject) {
    return { type: TAB2_WATCHER, payload, resolve, reject };
}

export function tab2Success(payload) {
    return { type: TAB2_SUCCESS, payload: payload };
}

export function tab2Error(error) {
    return { type: TAB2_FAILURE, payload: error };
}
export function tab3Watcher(payload, resolve, reject) {
    return { type: TAB3_WATCHER, payload, resolve, reject };
}

export function tab3Success(payload) {
    return { type: TAB3_SUCCESS, payload: payload };
}

export function tab3Error(error) {
    return { type: TAB3_FAILURE, payload: error };
}
export function tab4Watcher(payload, resolve, reject) {
    return { type: TAB4_WATCHER, payload, resolve, reject };
}

export function tab4Success(payload) {
    return { type: TAB4_SUCCESS, payload: payload };
}

export function tab4Error(error) {
    return { type: TAB4_FAILURE, payload: error };
}
export function tab5Watcher(payload, resolve, reject) {
    return { type: TAB5_WATCHER, payload, resolve, reject };
}

export function tab5Success(payload) {
    return { type: TAB5_SUCCESS, payload: payload };
}

export function tab5Error(error) {
    return { type: TAB5_FAILURE, payload: error };
}