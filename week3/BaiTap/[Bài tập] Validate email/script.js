function validatemail(email) {
    egexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if (egexp.test(email))
        document.write('mail nhap dung <br>');
    else
        document.write('mail  nhap sai <br>');
}
var checkmail = 'a@gmail.com';
validatemail(checkmail);
var checkmail = 'ab@yahoo.com';
validatemail(checkmail);
var checkmail = '@#abc@gmail.com';
validatemail(checkmail);