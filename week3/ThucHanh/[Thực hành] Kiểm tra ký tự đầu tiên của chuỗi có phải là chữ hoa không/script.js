function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        alert("String's first of " + str + " character is uppercase");
    } else {
        alert("String's first of " + str + " character is not uppercase");
    }
}
isFirstLetterUpperCase('Abc');
isFirstLetterUpperCase('abc');