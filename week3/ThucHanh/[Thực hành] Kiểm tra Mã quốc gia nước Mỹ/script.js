function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
var zipcode = "03201 - 2150";
document.write(is_usZipCode(zipcode));
var zipcode = "7892";
document.write(is_usZipCode(zipcode));

function kiemtracode(str) {
    regexp = /^(54)[0-9]{3}/;
    if (regexp.test(str)) {
        return true;
    } else {
        return false;
    }
}
var zipcode = "54000";
document.write(kiemtracode(zipcode));