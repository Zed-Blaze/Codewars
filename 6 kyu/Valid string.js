// 6 kyu

var validWord = function(dictionary, word) {
  
    reg = new RegExp('^(' + dictionary.join('|') + ')+$');
    return reg.test(word);

};
