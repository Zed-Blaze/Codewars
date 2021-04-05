var validWord = function(dictionary, word) {
    let a = word;
    console.log(a);

    for (dict of dictionary) {
        word = word.replaceAll(dict, '');
        console.log(word);
    };
    console.log(word);

    if (word.length == 0) console.log(true);
    if (word.length > 0) console.log(false);
};


// act([['code', 'wars'], 'codewars',true]);
// validWord(['code', 'wars'], 'code')
// validWord(['code', 'wars'], 'codewars')
// validWord(['a', 'b', 'c', 'd', 'e', 'f'], 'abcdef')