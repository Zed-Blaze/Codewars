// 8 kyu

function countSheeps(arrayOfSheep) {
    let count = 0;
    for (sheep of arrayOfSheep) {
        if (sheep === true) count++;
    }
    return count;
};