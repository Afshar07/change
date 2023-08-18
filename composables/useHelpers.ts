export default function useHelpers () {
    // const sortObjectOfObjects = (obj, sortValue) => {
    //     const order = [], res = {};
    //     Object.keys(obj).forEach(key => {
    //         return order[obj[key][sortValue] - 1] = key;
    //     });
    //     order.forEach(key => {
    //         res[key] = obj[key];
    //     });
    //     return res;
    // }
    const returnTransactionColorByStatus = (status: string) => {
        switch (status) {
            case 'OK':
                return 'green';
            case 'finished':
                return 'green';
            default:
                return 'grey';
        }
    };

    return {
        returnTransactionColorByStatus,
    };

    // return {
    //     sortObjectOfObjects
    // }
}
