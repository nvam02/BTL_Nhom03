// --------------------------------Thêm vào giỏ hàng-----------------------

let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
let div_content = ''
listPD.map((valua, index)=>{
    div_content += '<div class="products" style="padding-bottom: 10px;"><div class="image-products"><img style="height: 160px; width: 120px;" src="'+ valua.img +'" alt=""></div><div class="infor-products"><a href="" class="name">'+ valua.names +'</a><br><span>M</span><br><span class="prices">'+ valua.money +'</span>đ<br><div class="input-group"><button onclick="tru">-</button><input type="text" value="1"><button onclick="tru">+</button></div></div><div class="delete"><a href="" class="cart-delete" onclick="xoa('+index+')" >Xóa sản phẩm</a></div></div>'
    
})
var add_div = document.createElement("div")
add_div.innerHTML = div_content
var cartTable = document.querySelector("tbody")
cartTable.append(add_div)

// ------------------------------xóa giỏ hàng-------------------------------

function xoa(index){
    console.log(index)
    let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
    listPD.splice(index, 1)
    localStorage.setItem("list", JSON.stringify(listPD))
    cartTT()
}


// ------------------------------tính tổng tiền-------------------------------

function cartTT (){
    var cartIteam = document.querySelectorAll("tbody div.products")
    var totalC = 0
    var totalD = 0
    // console.log(cartIteam.length)
    for(var i=0;i<cartIteam.length;i++){
        // var inputValue = cartIteam[i].querySelector("input").value
        // console.log(inputValue)
        var productmoney = cartIteam[i].querySelector(".prices").innerHTML
        // totalA = inputValue * productmoney
        totalC = totalC + eval(productmoney)
        totalD = totalC.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    console.log(totalD)
    var tongtien = document.getElementById("text1")
    // console.log(tongtien)
    // var spgio = document.querySelector(".cart-icon span")
    tongtien.innerHTML = totalD+"đ"
    // spgio.innerHTML = cartIteam.length
    // inputchange()
}
cartTT()