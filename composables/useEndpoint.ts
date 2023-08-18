import { endpointFnGen } from '~/api/client';
import type {
    LoginUserParams,
    LoginUserResponse,
    RegisterUserParams,
    RegisterUserResponse,
    HotCoinResponse,
    UserBalanceResponse,
    CoinsListResponse,
    CoinPriceResponse,
    WalletDepositAllNetworkResponse,
    WalletDepositShareNetworkResponse,
} from '~/api/types';

export const useEndpoint = () => {
    const { $api } = useNuxtApp();
    /**
     * This function takes a function that accepts a client and parameters, and returns a new function that
     * calls the original function with the Nuxt API client and provided parameters.
     * @param fn - A function that takes two parameters: a client object of type  and a parameters
     * object of type P, and returns a Promise of type R.
     * @returns A function that takes in parameters of type P and returns a Promise of type R. The returned
     * function calls the input function with the  client and the input parameters.
     * @example
     * const fetchUser = endpointFn<ParamsType, ResponseType>(client => client('/user/profile', { method: 'GET' }))
     * // with params
     * const loginUser = endpointFn<ParamsType, ResponseType>((client, params) => client('/auth/login', { method: 'POST', body: params }))
     */
    const endpointFn = endpointFnGen($api);

    const registerUser = endpointFn<RegisterUserParams, RegisterUserResponse>(
        (client, params) => client('/auth/registeration', { method: 'POST', body: params }),
    );

    const loginUser = endpointFn<LoginUserParams, LoginUserResponse>(
        (client, params) => client('/auth/login', { method: 'POST', body: params }),
    );

    const fetchHotCoins = endpointFn<undefined, HotCoinResponse>(
        client => client('/core/coins/hot/list', { method: 'POST' }),
    );

    // Wallet
    const enUserBalances = endpointFn<undefined, UserBalanceResponse>(
        client => client('/users/wallets/balances', { method: 'POST' }),
    );

    // Withdraw
    const enUserWithdrawInformation = endpointFn(
        (client, params) => client('/users/wallets/withdraw/info', { body: params!, method: 'POST' }),
    );

    const enUserWithdrawAdd = endpointFn(
        (client, params) => client('/users/wallets/withdraw/add', { body: params!, method: 'POST' }),
    );

    const enUserWithdrawConfirm = endpointFn(
        (client, params) => client('/users/wallets/withdraw/confirm', { body: params!, method: 'POST' }),
    );

    const enUserWithdrawList = endpointFn(
        (client, params) => client('/users/wallets/withdraw/list', { body: params!, method: 'POST' }),
    );

    // Deposit
    const enUserDepositInformation = endpointFn<{currency: string}, WalletDepositAllNetworkResponse>(
        (client, params) => client('/users/wallets/deposit/info', { body: params!, method: 'POST' }),
    );

    const enUserDepositAdd = endpointFn<{currency: string; amount: string; network: string}, WalletDepositShareNetworkResponse>(
        (client, params) => client('/users/wallets/deposit/add', { body: params!, method: 'POST' }),
    );

    const enUserDepositUpdate = endpointFn<{currency: string; cancel?: boolean; txid: string}, null>(
        (client, params) => client('/users/wallets/deposit/update', { body: params!, method: 'POST' }),
    );

    const enUserDepositList = endpointFn(
        (client, params) => client('/users/wallets/deposit/list', { body: params!, method: 'POST' }),
    );

    // Dust
    const enUserDustList = endpointFn(
        client => client('/users/wallets/dust/list', { method: 'POST' }),
    );

    const enUserDustConvert = endpointFn(
        (client, params) => client('/users/wallets/dust/convert', { body: params!, method: 'POST' }),
    );

    // History
    const enTransactionsList = endpointFn(
        (client, params) => client('/users/wallets/transactions/list', { body: params!, method: 'POST' }),
    );

    // Exchange
    const enExchangeList = endpointFn(
        (client, params) => client('/exchange/list', { body: params!, method: 'POST' }),
    );

    // Core
    const enCoinsList = endpointFn<undefined, CoinsListResponse>(
        client => client('/core/coins/list', { method: 'POST' }),
    );

    const enCoinsPrice = endpointFn<undefined, CoinPriceResponse>(
        client => client('/core/coins/price', { method: 'POST' }),
    );

    return {
        registerUser,
        loginUser,
        fetchHotCoins,
        enUserBalances,
        enUserWithdrawInformation,
        enUserWithdrawAdd,
        enUserWithdrawConfirm,
        enUserDepositInformation,
        enUserDepositAdd,
        enUserDepositUpdate,
        enCoinsList,
        enCoinsPrice,
        enUserDustList,
        enUserDustConvert,
        enTransactionsList,
        enUserDepositList,
        enUserWithdrawList,
        enExchangeList,
    };
};
