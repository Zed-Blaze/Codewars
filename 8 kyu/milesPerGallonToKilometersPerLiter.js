function converter (mpg) {
    let km = mpg * 1.609344;
    return Number((km / 4.54609188).toFixed(2));
};