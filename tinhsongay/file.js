function songay() {
	let day = document.getElementById('day').value;
	switch (day) {
		case '2':
			document.getElementById('hienngay').innerHTML='Tháng có 28 hoặc 29 ngày';
			break;
		case '1':
		case '3':
		case '5':
		case '7':
		case '8':
		case '10':
		case '12':
			document.getElementById('hienngay').innerHTML='Tháng có 31 ngày';
			break;
		case '4':
		case '6':
		case '9':
		case '11':
			document.getElementById('hienngay').innerHTML='Tháng có 30 ngày';
			break;
		default:
			document.getElementById('hienngay').innerHTML='Tháng không tồn tại';
			break;
		}
	event.preventDefault();
}