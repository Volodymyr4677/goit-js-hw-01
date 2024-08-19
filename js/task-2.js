function getShippingMessage(country, goodsCost, shippingCost) {
    const totalCost = goodsCost + shippingCost;
    return `Shipping to ${country} will cost ${totalCost} credits`;
}