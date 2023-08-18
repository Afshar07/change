import type { UserBalanceResponse, CoinPriceResponse, CoinsListResponse } from '@/api/types';
import type { CoinsObj } from '@/types';

export const useCoinsStore = definePiniaStore('coins-store', () => {
    const { enUserBalances, enCoinsList, enCoinsPrice } = useEndpoint();
    const coinsList = ref<null | CoinsListResponse['data']>(null);
    const coinsObj = ref<null | Record<string, CoinsObj>>(null);
    const coinsPrice = ref<null | CoinPriceResponse['data']>(null);
    const userBalances = ref<null | UserBalanceResponse['data']>(null);
    const dollerPrice = ref<null | string>(null);
    const balanceVisibility = ref<null | string>(localStorage.getItem('balance_visibility_mode') || null);
    const hideZeros = ref<null | string>(localStorage.getItem('hide_zero_mode') || null);

    const coinsListsWithPrices = computed(() => {
        if (!coinsObj.value) {
            return;
        }
        const coinsObjInstance = coinsObj.value;
        if (coinsPrice.value) {
            for (const key in coinsPrice.value!) {
                if (Object.hasOwn(coinsPrice.value, key)) {
                    const coin = coinsObjInstance[key];
                    if (coin) {
                        coin.price = coinsPrice.value[key];
                    }
                }
            }
        }
        return coinsObjInstance;
    });

    const totalTmnAmount = computed(() => {

    });

    const coinsWithBalances = computed(() => {
        const coinsObjInstance = coinsListsWithPrices.value;
        if (userBalances.value && userBalances.value.balance) {
            for (const key in userBalances.value.balance) {
                if (Object.hasOwn(userBalances.value.balance, key)) {
                    const coin = coinsObjInstance![key.toLowerCase()];
                    if (coin) {
                        coin.balance = userBalances.value.balance[key];
                        if (coin.price && dollerPrice.value) {
                            coin.tmnPrice = Math.trunc((parseFloat(coin.price) * parseFloat(coin.balance)) * parseFloat(dollerPrice.value));
                        } else if (coin.name === 'تومان') {
                            coin.tmnPrice = Number(coin.balance || 0);
                        }
                    }
                }
            }
        }
        return coinsObjInstance;
    });

    const totalAmount = computed(() => {
        const coinsInstance = coinsWithBalances.value;
        if (userBalances.value && coinsInstance && dollerPrice.value) {
            let totalBalance = 0;
            for (const key in userBalances.value.balance) {
                if (Object.hasOwn(userBalances.value.balance, key) && coinsInstance[key.toLowerCase()] && coinsInstance[key.toLowerCase()].tmnPrice) {
                    totalBalance += coinsInstance[key.toLowerCase()].tmnPrice;
                }
            }
            return totalBalance;
        }
        return 0;
    });

    const coinsPieChart = computed(() => {
        const items: Record<string, number> = {};
        let length = 0;
        const balancesInstance = userBalances.value?.balance;
        const coinsInstance = coinsWithBalances.value;
        const all = totalAmount.value;
        if (balancesInstance && coinsInstance && dollerPrice.value && all) {
            for (let key in balancesInstance) {
                if (Object.hasOwn(balancesInstance, key)) {
                    key = key.toLowerCase();
                    if (coinsInstance[key] && coinsInstance[key].tmnPrice) {
                        const percent = (coinsInstance[key].tmnPrice * 100) / all;
                        const label = key.toUpperCase();
                        items[label] = parseFloat(percent.toFixed(2));
                        length++;
                        if (length >= 4) {
                            break;
                        }
                    }
                }
            }
            const values = Object.values(items);
            const sum = values.reduce((a, b) => a + b);
            if (sum < 100) {
                const remaining = 100 - sum;
                items.remaining = parseFloat(remaining.toFixed(2));
            }
            return items;
        }

        return null;
    });

    const updateBalanceVisibility = () => {
        let value = 'true';
        if (balanceVisibility.value === 'true') {
            value = 'false';
        }
        balanceVisibility.value = value;
        localStorage.setItem('balance_visibility_mode', balanceVisibility.value);
    };

    const updateHideZeros = () => {
        let value = 'true';
        if (hideZeros.value === 'true') {
            value = 'false';
        }
        hideZeros.value = value;
        localStorage.setItem('hide_zero_mode', hideZeros.value);
    };

    function coinsListHandler () {
        if (Array.isArray(coinsList.value)) return;

        enCoinsList().then(({ data }) => {
            coinsList.value = data;
            coinsObj.value = coinsList.value?.reduce((accumulator, value) => ({
                ...accumulator,
                [value.symbol.toLowerCase()]: {
                    name: value.name,
                },
            }), {});
        });
    }

    function coinsPriceHandler () {
        enCoinsPrice().then(({ data }) => {
            coinsPrice.value = data;
            if (data.D) {
                dollerPrice.value = data.D;
            }
        });
    }

    function userBalanceHandler () {
        enUserBalances().then(({ data }) => {
            userBalances.value = data;
        });
    }

    return {
        dollerPrice,
        coinsList,
        coinsPrice,
        userBalances,
        userBalanceHandler,
        coinsPriceHandler,
        coinsListHandler,
        coinsListsWithPrices,
        coinsWithBalances,
        coinsPieChart,
        totalTmnAmount,
        totalAmount,
        balanceVisibility,
        hideZeros,
        updateBalanceVisibility,
        updateHideZeros,
    };
});
