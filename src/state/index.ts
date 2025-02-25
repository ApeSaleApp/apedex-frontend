import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { updateVersion } from './global/actions'
import farmsReducer from './farms'
// import toastsReducer from './toasts'
import poolsReducer from './pools'
import profileReducer from './profile'
import statsReducer from './stats'
import statsOverallReducer from './statsOverall'
import auctionReducer from './auction'
import vaultReducer from './vaults'
import tokenPricesReducer from './tokenPrices'
import iazosReducer from './iazos'
import networkReducer from './network'
import nfaStakingPoolsReducer from './nfaStakingPools'
import dualFarmsReducer from './dualFarms'
import jungleFarmsReducer from './jungleFarms'
import blockReducer from './block'
import multicall from './multicall/reducer'
import billsReducer from './bills'
import swap from './swap/reducer'
import orders from './orders/reducer'
import user from './user/reducer'
import lists from './lists/reducer'
import transactions from './transactions/reducer'
import burn from './burn/reducer'
import mint from './mint/reducer'
import lpPricesReducer from './lpPrices'
import nfasReducer from './nfas'

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists']

const store = configureStore({
  reducer: {
    farms: farmsReducer,
    block: blockReducer,
    // toasts: toastsReducer,
    pools: poolsReducer,
    profile: profileReducer,
    stats: statsReducer,
    statsOverall: statsOverallReducer,
    auctions: auctionReducer,
    vaults: vaultReducer,
    tokenPrices: tokenPricesReducer,
    lpTokenPrices: lpPricesReducer,
    iazos: iazosReducer,
    network: networkReducer,
    nfaStakingPools: nfaStakingPoolsReducer,
    dualFarms: dualFarmsReducer,
    jungleFarms: jungleFarmsReducer,
    bills: billsReducer,
    nfas: nfasReducer,
    multicall,
    swap,
    user,
    lists,
    transactions,
    burn,
    mint,
    orders,
  },
  middleware: [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS }),
})

store.dispatch(updateVersion())

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store
