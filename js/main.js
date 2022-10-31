function getMyEle(id) {
    return document.querySelector(id);
}

var themSo = [];
getMyEle('#btnThemSo').onclick = function () {
    var inputThemSo = Number(getMyEle('#inputThemSo').value);
    themSo.push(inputThemSo)
    getMyEle('#txtThongBao').innerHTML = themSo
}

getMyEle('#btnTinhTong').onclick = function () {
    var tong = 0;
    for (var i = 0; i < themSo.length; i++) {
        tong += themSo[i]
    }
    getMyEle('#txtTinhTong').innerHTML = 'Tổng bằng: ' + tong
}

getMyEle('#btnDemSo').onclick = function () {
    var tong = 0
    for (var i = 0; i < themSo.length; i++) {
        if(themSo[i] > 0){
            tong++
        }
    }
    getMyEle('#txtDemSo').innerHTML = 'Số dương: ' + tong
}

getMyEle('#btnTimSoNho').onclick = function () {
    var min = themSo[0];
    for (var i = 0; i < themSo.length; i++) {
        if (themSo[i] < min) {
            min = themSo[i]
        }
    }
    getMyEle('#txtTimSoNho').innerHTML = 'Số nhỏ nhất là: ' + min
}


getMyEle('#btnTimSoDuongNho').onclick = function () {
    var min = themSo[0];
    for (var i = 0; i < themSo.length; i++) {
        if (themSo[i] < min && themSo[i] > 0) {
            min = themSo[i]
        }
    }
    getMyEle('#txtTimSoDuongNho').innerHTML = 'Số nhỏ nhất là: ' + min
}

getMyEle('#btnTimSoChanCuoi').onclick = function () {
    var soChanCuoi = 0;
    for (var i = 0; i < themSo.length; i++) {
        if (themSo[i] % 2 === 0) {
            soChanCuoi = themSo[i]
        }
    }
    getMyEle('#txtTimSoChanCuoi').innerHTML = 'Số chẵn cuối cùng: ' + soChanCuoi
}

getMyEle('#btnDoiCho').onclick = function () {
    var inputViTri1 = Number(getMyEle('#inputViTri1').value);
    var inputViTri2 = Number(getMyEle('#inputViTri2').value);
    for (var i = 0; i < themSo.length; i++) {
        var temp = themSo[inputViTri1]
        themSo[inputViTri1] = themSo[inputViTri2]
        themSo[inputViTri2] = temp
    }
    getMyEle('#txtDoiCho').innerHTML = 'Mảng sau khi đổi: ' + themSo
}

getMyEle('#btnSapXepTangDan').onclick = function () {
    for (var i = 0; i < themSo.length; i++) {
        for (var j = 0; j < themSo.length; j++) {
            if (themSo[j] > themSo[j + 1]) {
                var temp = themSo[j]
                themSo[j] = themSo[j + 1]
                themSo[j + 1] = temp
            }
        }
    }
    getMyEle('#txtSapXepTangDan').innerHTML = 'Mảng sau khi sắp xếp: ' + themSo
}

getMyEle('#btnTimSoNguyenTo').onclick = function () {
    var count = 0;
    var thongBao = '';
    var vitri = 0
    for(var i = 0; i < themSo.length; i++){
     var isSONT = kiemTraSoNguyenTo(themSo[i])
     if(isSONT){
        thongBao = themSo[i] + ' là số nguyên tố đầu tiên tìm được'
        break;
     }else{
        thongBao = 'Mảng không tìm thấy số nguyên tố nào'
     }
    }
    getMyEle('#txtTimSoNguyenTo').innerHTML = thongBao
}
function kiemTraSoNguyenTo(soNguyen) {
    var dem = 0;
    for(var i = 0; i <= soNguyen ; i++){
        if(soNguyen % i === 0){
            dem++
        }
    }
    if(dem === 2){
        return true
    }else{
       return false;
    }
}

console.log(kiemTraSoNguyenTo(2))

getMyEle('#btnDemSoNguyen').onclick = function () {
    var count = 0
    for(var i = 0; i < themSo.length; i++ ){
        if(Number.isInteger(themSo[i])){
            count++
        }
    }
    getMyEle('#txtDemSoNguyen').innerHTML = count
}

getMyEle('#btnSSSLAD').onclick = function () {
    var countDuong = 0
    var countAm = 0;
    var thongBao = ''
    for(var i = 0; i < themSo.length; i++ ){
        if(themSo[i] > 0){
            countDuong++
        }else{
            countAm++
        }
    }
    if(countDuong > countAm ){
        thongBao = 'Số lượng số dương: ' + countDuong  + '<br>' + 'Số lượng số âm: ' + countAm + '<br>' + '=>' + 'Số lượng số dương lớn nhất'
    }else{
        thongBao = 'Số lượng số dương: ' + countDuong  + '<br>' + 'Số lượng số âm: ' + countAm + '<br>' + '=>' + 'Số lượng số âm lớn nhất'
    }
    getMyEle('#txtSSSLAD').innerHTML = thongBao
}

