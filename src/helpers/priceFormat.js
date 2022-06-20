//
export const priceFormat = (prc) => {

    const priceFloat = (prc).toFixed(2);
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(priceFloat)
}