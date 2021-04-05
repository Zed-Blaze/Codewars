// 8 kyu

function digitize(n) {
    let count = 0;
    n = n.toString().split('').reverse();

    for (num of n) {
        console.log(num);
        n[count] = Number(num)
        count++;
    };
    return n;
};


// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// };
