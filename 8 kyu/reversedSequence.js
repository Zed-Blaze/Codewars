const reverseSeq = n => {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    };
    array = array.reverse();
    return array;
};