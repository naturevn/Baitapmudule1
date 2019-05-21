function kiemtraTenlop(num) {
    egexp = /^[CAP][0-9]{4}[GHIKLM]$/;
    if (egexp.test(num))
        document.write('Tên lớp ' + num + ' hợp lệ <br> ');
    else
        document.write('Tên lớp không ' + num + ' hợp lệ <br>');
}
kiemtraTenlop('C0318G');
kiemtraTenlop('P0323A');
kiemtraTenlop('P0023G');