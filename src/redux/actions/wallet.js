import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    LOAD_TETHER_SUCCESS,
    LOAD_TETHER_FAIL,
    LOAD_TETHER_BALANCE_SUCCESS,
    LOAD_TETHER_BALANCE_FAIL,
    LOAD_URIDIUM_SUCCESS,
    LOAD_URIDIUM_FAIL,
    LOAD_URIDIUM_BALANCE_SUCCESS,
    LOAD_URIDIUM_BALANCE_FAIL,
    LOAD_BANK_SUCCESS,
    LOAD_BANK_FAIL,
    LOAD_BANK_BALANCE_SUCCESS,
    LOAD_BANK_BALANCE_FAIL,
    SET_LOADING_SUCCESS,
    SET_LOADING_FAIL
} from './types'
import Web3 from 'web3'

import Tether from '../../truffle_abis/Tether.json'
import URI from '../../truffle_abis/URI.json'
import DecentralBank from '../../truffle_abis/DecentralBank.json'

export const setLoadWeb3 = () => async dispatch => {
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        dispatch({
            type: LOAD_WEB3_SUCCESS,
        })
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        dispatch({
            type: LOAD_WEB3_SUCCESS,
        })
    } else {
        dispatch({
            type: LOAD_WEB3_FAIL,
        })
    }
}

export const loadBlockchainData = () => async dispatch => {
    if(window.web3){
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        dispatch({
            type: LOAD_BLOCKCHAIN_DATA_SUCCESS,
            payload:accounts[0]
        })

        const networkId = await web3.eth.net.getId()
        
        // Cargar Tether
        const tetherData = Tether.networks[networkId]
        if(tetherData){
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            dispatch({
                type: LOAD_TETHER_SUCCESS,
                payload:tether
            })
            let tetherBalance = await tether.methods.balanceOf(accounts[0]).call()
            if(tetherBalance){
                dispatch({
                    type: LOAD_TETHER_BALANCE_SUCCESS,
                    payload:tetherBalance.toString()
                })
            } else {
                dispatch({
                    type: LOAD_TETHER_BALANCE_FAIL
                })
            }
        } else {
            dispatch({
                type: LOAD_TETHER_FAIL
            })
            
        }
        
        // Cargar Uridium
        const uridiumData = URI.networks[networkId]
        if(uridiumData){
            const uri = new web3.eth.Contract(URI.abi, uridiumData.address)
            dispatch({
                type: LOAD_URIDIUM_SUCCESS,
                payload:uri
            })
            let uridiumBalance = await uri.methods.balanceOf(accounts[0]).call()
            if(uridiumBalance){
                dispatch({
                    type: LOAD_URIDIUM_BALANCE_SUCCESS,
                    payload:uridiumBalance.toString()
                })
            } else {
                dispatch({
                    type: LOAD_URIDIUM_BALANCE_FAIL
                })
            }
        } else {
            dispatch({
                type: LOAD_URIDIUM_FAIL
            })
            
        }
        
        
        // Cargar Banco Decentralizado
        const decentralBankData = DecentralBank.networks[networkId]
        if(decentralBankData){
            const decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
            dispatch({
                type: LOAD_BANK_SUCCESS,
                payload:decentralBank
            })
            let stakingBalance = await decentralBank.methods.stakingBalance(accounts[0]).call()
            if(stakingBalance){
                dispatch({
                    type: LOAD_BANK_BALANCE_SUCCESS,
                    payload:stakingBalance.toString()
                })
            } else {
                dispatch({
                    type: LOAD_BANK_BALANCE_FAIL
                })
            }
        } else {
            dispatch({
                type: LOAD_BANK_FAIL
            })
        }

        dispatch({
            type: SET_LOADING_SUCCESS,
            payload:true
        })

    } else {
        dispatch({
            type: LOAD_BLOCKCHAIN_DATA_FAIL,
        })
        dispatch({
            type: SET_LOADING_FAIL,
            payload:false
        })
    }
    
}
