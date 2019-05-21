function validateNum(num) {
    egexp = /^\([0-9]{2}\)\-\(0[0-9]{9}\)/;
    if (egexp.test(num))
        document.write('Số điện thoại ' + ' đúng <br>');
    else
        document.write('Số điện thoại ' + ' sai <br>');
}

validateNum('(84)-(0978489648)');
validateNum('(a8)-(22222222)');