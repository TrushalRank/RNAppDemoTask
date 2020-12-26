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


const initialState = {
  error: null,
  userLoginLoader: false,
  tab1: [],
  tab2: [],
  tab3: [],
  tab4: [],
  tab5: [],
  userEmail: '',
  userPassword: '',
  userToken: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case TAB1_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TAB1_SUCCESS:
      return {
        ...state,
        error: null,
        tab1: action.payload,
        userLoginLoader: false
      };
    case TAB1_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case TAB2_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TAB2_SUCCESS:
      return {
        ...state,
        error: null,
        tab2: action.payload,
        userLoginLoader: false
      };
    case TAB2_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case TAB3_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TAB3_SUCCESS:
      return {
        ...state,
        error: null,
        tab3: action.payload,
        userLoginLoader: false
      };
    case TAB3_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case TAB4_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TAB4_SUCCESS:
      return {
        ...state,
        error: null,
        tab4: action.payload,
        userLoginLoader: false
      };
    case TAB4_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    case TAB5_WATCHER:
      return {
        ...state,
        userLoginLoader: true
      };
    case TAB5_SUCCESS:
      return {
        ...state,
        error: null,
        tab5: action.payload,
        userLoginLoader: false
      };
    case TAB5_FAILURE:
      return {
        ...state,
        error: action,
        userLoginLoader: false
      };
    default:
      return state;
  }
};