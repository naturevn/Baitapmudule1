function Account(acc) {
    egxep = /^[_a-z0-9]{6,}$/;
    if (egxep.test(acc))
        document.write('Tài khoản ' + acc + ' hợp lệ <br>');
    else
        document.write('Tài khoản ' + acc + ' không hợp lệ <br>');
}
var checkacc = '123abc_';
Account(checkacc);
var checkacc = '_abc123';
Account(checkacc);
var checkacc = '______';
Account(checkacc);
var checkacc = '1abcdefg';
Account(checkacc);
Account('@');
Account('12345');