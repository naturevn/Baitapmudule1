function ngaythangnam() {
    let ngaythangnama = document.getElementById('inputb1').value;
    egexp = /^(0?[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (egexp.test(ngaythangnama))
        document.getElementById('result1').innerHTML = 'Tháng ' + ngaythangnama + ' đúng <br>';
    else
        document.getElementById('result1').innerHTML = 'Tháng ' + ngaythangnama + ' sai <br>';
}
// ngaythangnam('19/11/1997');

function kiemtrabaomat() {
    let kiemtrabaomata = document.getElementById('inputb2').value;
    egexp = /^(NA)[0-9]{5}[12][TURE]{2}$/;
    if (egexp.test(kiemtrabaomata))
        document.getElementById('result2').innerHTML = kiemtrabaomata + ' mã bảo mật tốt đúng chuẩn';
    else
        document.getElementById('result2').innerHTML = kiemtrabaomata + ' mã bảo mật chưa đúng chuẩn';
}
// kiemtrabaomat('NA123452TE');
function demsotu() {
    let demsotua = document.getElementById('inputb3').value;
    document.getElementById('result3').innerHTML = demsotua.length;

}

function languyenam(str) {
    egexp = /^[UEOAIueoai]$/;
    if (egexp.test(str))
        return true;
    else return false;
}
let valueNguyenam;
let coutnguyenam;
let coutphuam;

function demnguyenam() {
    valueNguyenam = document.getElementById('inputb4').value;
    coutnguyenam = 0;
    coutphuam = 0;
    for (let i = 0; i < valueNguyenam.length; i++) {
        if (languyenam(valueNguyenam[i])) {
            coutnguyenam++;
        } else coutphuam++;
    }
    document.getElementById('result41').innerHTML = 'Số Nguyên âm trong chuỗi ' + coutnguyenam;
    document.getElementById('result42').innerHTML = 'Số phụ âm trong chuỗi ' + coutphuam;
}