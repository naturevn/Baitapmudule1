function kiemtra() {
    let date = new Date();
    let giays = document.getElementById('idgiay').value;
    let phuts = document.getElementById('idphut').value;
    let gios = document.getElementById('idgio').value;
    let ngays = document.getElementById('idngay').value;
    let thangs = document.getElementById('idthang').value;
    let nams = document.getElementById('idnam').value;
    let namsinh = date.getFullYear() - nams;
    let thangsinh = date.getMonth() - thangs;
    let ngaysinh = date.getDate() - ngays;
    let giosinh = date.getHours() - gios;
    let phutsinh = date.getMinutes() - phuts;
    let giaysinh = date.getMilliseconds() - giays;
    document.getElementById('resultnam').innerHTML = "Tôi đã sống " + namsinh + " năm";
    document.getElementById('resultthang').innerHTML = "Tôi đã sống " + namsinh * 12 + thangsinh + " tháng";
    document.getElementById('resultngay').innerHTML = "Tôi đã sống " + (namsinh * 12 + thangsinh) * 365 + ngaysinh + " ngày";
    document.getElementById('resultgio').innerHTML = "Tôi đã sống " + ((namsinh * 12 + thangsinh) * 365 + ngaysinh) * 24 + giosinh + " giờ";
    document.getElementById('resultphut').innerHTML = "Tôi đã sống " + (((namsinh * 12 + thangsinh) * 365 + ngaysinh) * 24 + giosinh) * 60 + phutsinh + " phút";
    document.getElementById('resultgiay').innerHTML = "Tôi đã sống " + ((((namsinh * 12 + thangsinh) * 365 + ngaysinh) * 24 + giosinh) * 60 + phutsinh) * 60 + giosinh + " giây";
}
let cout = 0;


let array = "Tôi yêu ngôn ngữ lập trình Javascript";
for (let i = 0; i < array.length; i++) {
    if (array[i] === "a")
        cout++;

}
document.getElementById('result').innerHTML = cout;