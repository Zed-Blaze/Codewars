var humanYearsCatYearsDogYears = function(humanYears) {
    let array = [];
    array[0] = humanYears;
    array[1] = humanYears * 15;
    array[2] = humanYears * 15;

    if (humanYears >= 3) { 
        array[1] -= (6 + ((humanYears - 2) * 11))
        array[2] -= (6 + ((humanYears - 2) * 10))
    };

    if (humanYears == 2) { 
        array[1] -= 6
        array[2] -= 6
    };

    return array;
};