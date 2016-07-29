
import fetch from 'isomorphic-fetch'

export const showBalloon = (marker) => {
    return {
        type: 'SHOW_BALLOON',
        marker
    }
}

export const closeBalloon = () => {
    return {
        type: 'CLOSE_BALLOON'
    }
}

export const showDetails = (marker) => {
    return {
        type: 'SHOW_DETAILS',
        marker
    }
}

export const closeDetails = () => {
    return {
        type: 'CLOSE_DETAILS'
    }
}

function requestDetailInfo(marker) {
    return {
        type: 'REQUEST_DETAIL_INFO',
        marker
    }
}

function receiveDetailInfo(marker, info) {
    return {
        type: 'RECEIVE_DETAIL_INFO',
        marker,
        info
    }
}

function fetchDetailInfo(marker) {
    return dispatch => {
        dispatch(requestDetailInfo(marker))
        return fetch(marker.url)
            .then(response => response.json())
            .then(json => dispatch(receiveDetailInfo(marker, json)))
    }
}

function shouldFetchDetailInfo(state, marker) {
    var info = null
    if (state.detailsInfo.marker && state.detailsInfo.marker.id === marker.id) {
        info = state.detailsInfo.info
    }
    if (!info) {
        return true
    } else if (info.isFetching) {
        return false
    } else {
        return info.didInvalidate
    }
}

export function fetchDetailInfoIfNeeded(marker) {
    return (dispatch, getState) => {
        if (shouldFetchDetailInfo(getState(), marker)) {
            return dispatch(fetchDetailInfo(marker))
        }
    }
}

export const toggleSideMenu = ()=>{
    return {
        type: 'TOGGLE_SIDEMENU'
    }
}

export const search = (term)=>{
    return {
        type: 'SEARCH',
        term
    }
}

export const centralMap = (marker) => ({
    type: 'CENTRAL_MAP',
    marker
})