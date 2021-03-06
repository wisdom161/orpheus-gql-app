import Axios from "axios";
import * as types from '../constants/actionTypes';


export const updateCodeInput = (value) => ({
  type: types.UPDATE_CODE_INPUT,
  payload: value,
});

export const updateCodeHistory = (value) => ({
  type: types.UPDATE_CODE_HISTORY,
  payload: value,
})

export const toggleCodeHistory = () => ({
  type: types.TOGGLE_CODE_HISTORY,
})

export const buildTreeVis = (value) => ({
  type: types.BUILD_TREE_VIS,
  payload: value,
})

export const storeResponseData = (value) => ({
  type: types.STORE_RESPONSE_DATA,
  payload: value,
})

export const setDatabaseRequests = (value) => ({
  type: types.SET_DATABASE_REQUESTS,
  payload: value,
});

export const setDataPoints = (value) => ({
  type: types.SET_DATA_POINTS,
  payload: value,
});

export const setNestingDepth = (value) => ({
  type: types.SET_NESTING_DEPTH,
  payload: value,
});

export const setNetworkLatency = (value) => ({
  type: types.SET_NETWORK_LATENCY,
  payload: value,
});

export const setEffectiveRuntime = (value) => ({
  type: types.SET_EFFECTIVE_RUNTIME,
  payload: value,
});

export const setResolverNum = (value) => ({
  type: types.SET_RESOLVER_NUM,
  payload: value,
});

export const setResolverNames = (value) => ({
  type: types.SET_RESOLVER_NAMES,
  payload: value,
});

export const setQueryErrorStatus = (value) => ({
  type: types.SET_QUERY_ERROR_STATUS,
  payload: value,
})
