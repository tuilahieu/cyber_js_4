var formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
});

// bài 1
var resultB1 = document.querySelector('#b1 .result-bt1 span');

function manageStudent() {
    var diemChuan = +document.getElementById('diemchuan').value;
    var khuVuc = +document.getElementById('khuvuc').value;
    var doiTuong = +document.getElementById('doituong').value;
    var diem1 = +document.getElementById('diem1').value;
    var diem2 = +document.getElementById('diem2').value;
    var diem3 = +document.getElementById('diem3').value;
    
    var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    if(diem1 === 0 || diem2 === 0 || diem3 === 0) {
        resultB1.textContent = ` bạn đã trượt do có ít nhất 1 môn điểm 0`;
    } else if(tongDiem >= diemChuan) {
        resultB1.textContent = ` Điểm của bạn là ${tongDiem}, chúc mừng bạn đã trúng tuyển.`;
    } else {
        resultB1.textContent = ` Điểm của bạn là ${tongDiem}, rất tiếc bạn chưa trúng tuyển.`;
    }
}

// bài 2
var resultB2 = document.querySelector('#b2 .result-bt2 span');

function caculateKwh() {
    var hoTen = document.getElementById('hoten').value || 'Tran Van Hieu';
    var soKwh = +document.getElementById('kwh').value;
    var tiGia;
    if(soKwh <= 0) {
        alert('Chưa nhập số KWH');
        return;
    } else if(soKwh < 50) {
        tiGia = 500;
    } else if(soKwh >=50 && soKwh < 100) {
        tiGia = 650;
    } else if(soKwh >=100 && soKwh < 200) {
        tiGia = 650;
    } else if(soKwh >=200 && soKwh < 350) {
        tiGia = 650;
    } else {
        tiGia = 1300;
    }
    
    var soTien = formatter.format(soKwh * tiGia);
    resultB2.textContent = `KH: ${hoTen} cần thanh toán ${soTien}`;
}

// bài 3
var resultB3 = document.querySelector('#b3 .result-bt3 span');

function tinhTienThue() {
    var hoTen = document.getElementById('hoten2').value || 'Tran Van Hieu';
    var thuNhapNam = +document.getElementById('thuNhapNam').value;
    var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;

    var thuNhapChiuThue = thuNhapNam - 4 - (nguoiPhuThuoc * 1.6);
    var thueSuat;
    if(thuNhapChiuThue <= 60) {
        thueSuat = 5/100;
    } else if(thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        thueSuat = 1/10;
    } else if(thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        thueSuat = 15/100;
    } else if(thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        thueSuat = 2/10;
    } else if(thuNhapChiuThue > 384 && thuNhapChiuThue <= 628) {
        thueSuat = 25/100;
    } else if(thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        thueSuat = 3/10;
    } else {
        thueSuat = 35/100;  
    }

    var tienThue = formatter.format(thueSuat * thuNhapChiuThue * 1000000);
    resultB3.textContent = `${hoTen} có thuế thu nhập là ${tienThue}`;
}

// bài 4
var resultB4 = document.querySelector('#b4 .result-bt4 span');

function changeOption() {
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    if(loaiKhachHang === 'A') {
        document.getElementById('soKetNoi').removeAttribute('hidden');
    } else {        
        document.getElementById('soKetNoi').setAttribute('hidden', true);
    }
}

function tinhTienCap() {
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKetNoi = +document.getElementById('soKetNoi').value;
    var kenhCaoCap = +document.getElementById('kenhCaoCap').value;
    var phiThu;

    switch (loaiKhachHang) {
        case 'B':
            phiThu = 4.5 + 20.5 + kenhCaoCap * 7.5;
            break;
        case 'A':
            if(soKetNoi <= 10) {
                phiThu = 15 + 75 + kenhCaoCap * 50;
            } else {
                phiThu = 15 + 75 + soKetNoi * 5 + kenhCaoCap * 50;
            }
            break;
        default:
            phiThu = 'error';
            break;
    }
    resultB4.textContent = `MKH ${maKhachHang} cần thanh toán ${phiThu}$`;
}
