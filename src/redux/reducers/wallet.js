import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    LOAD_TETHER_FAIL,
    LOAD_TETHER_SUCCESS,
    LOAD_TETHER_BALANCE_SUCCESS,
    LOAD_TETHER_BALANCE_FAIL,
    LOAD_URIDIUM_FAIL,
    LOAD_URIDIUM_SUCCESS,
    LOAD_URIDIUM_BALANCE_SUCCESS,
    LOAD_URIDIUM_BALANCE_FAIL,
    LOAD_BANK_SUCCESS,
    LOAD_BANK_FAIL,
    LOAD_BANK_BALANCE_SUCCESS,
    LOAD_BANK_BALANCE_FAIL,
    SET_LOADING_SUCCESS,
    SET_LOADING_FAIL
} from '../actions/types'

const initialState = {
    account: null,
    web3: null,
    tether: null,
    tether_balance: null,
    uridium: null,
    uridium_balance: null,
    decentralBank: null,
    stakingBalance: null,
    loading_success: false
}

export default function wallet(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case LOAD_BLOCKCHAIN_DATA_SUCCESS:
            return {
                ...state,
                account: payload
            }
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }
        case LOAD_TETHER_SUCCESS:
            return {
                ...state,
                tether: payload
            }
        case LOAD_TETHER_BALANCE_SUCCESS:
            return {
                ...state,
                tether_balance: payload
            }
        case LOAD_URIDIUM_SUCCESS:
            return {
                ...state,
                uridium: payload
            }
        case LOAD_URIDIUM_BALANCE_SUCCESS:
            return {
                ...state,
                uridium_balance: payload
            }
        case LOAD_BANK_SUCCESS:
            return {
                ...state,
                decentralBank: payload
            }
        case LOAD_BANK_BALANCE_SUCCESS:
            return {
                ...state,
                stakingBalance: payload
            }
        case SET_LOADING_SUCCESS:
            return {
                ...state,
                loading_success: payload
            }



        case LOAD_BLOCKCHAIN_DATA_FAIL:
            return {
                ...state,
                account: null
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        case LOAD_TETHER_FAIL:
            return {
                ...state,
                tether: null
            }
        case LOAD_TETHER_BALANCE_FAIL:
            return {
                ...state,
                tether_balance: null
            }
        case LOAD_URIDIUM_FAIL:
            return {
                ...state,
                uridium: null
            }
        case LOAD_URIDIUM_BALANCE_FAIL:
            return {
                ...state,
                uridium_balance: null
            }
        case LOAD_BANK_FAIL:
            return {
                ...state,
                decentralBank: null
            }
        case LOAD_BANK_BALANCE_FAIL:
            return {
                ...state,
                stakingBalance: null
            }
        case SET_LOADING_FAIL:
            return {
                ...state,
                loading_success: null
            }

        default:
            return state
    }
}