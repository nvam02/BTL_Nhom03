// --------------------------------Thêm vào giỏ hàng-----------------------

let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
let div_content = ''
listPD.map((valua, index)=>{
    div_content += '<div class="products" style="padding-bottom: 10px;"><div class="image-products"><img style="height: 160px; width: 120px;" src="'+ valua.img +'" alt=""></div><div class="infor-products"><a href="" class="name">'+ valua.names +'</a><br><span>M</span><br><span class="prices">'+ valua.money +'</span>đ<br><div class="input-group"><button type="button" id="down" onclick="step(this,'+index+')">-</button><input type="text" min="1" max="50" step="1" value="'+valua.SL+'" class="input" id="'+index+'" readonly><button type="button" id="up" onclick="step(this,'+index+')">+</button></div></div><div class="delete"><a href="" class="cart-delete" onclick="xoa('+index+')" >Xóa sản phẩm</a></div></div>'
    
})
var add_div = document.createElement("div")
add_div.innerHTML = div_content
var cartTable = document.querySelector("tbody")
cartTable.append(add_div)

// ------------------------------xóa giỏ hàng-------------------------------

function xoa(index){
    // console.log(index)
    let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
    listPD.splice(index, 1)
    localStorage.setItem("list", JSON.stringify(listPD))
    cartTT()
}


// ------------------------------tính tổng tiền-------------------------------
var f
function cartTT (){
    var cartIteam = document.querySelectorAll("tbody div.products")
    var totalC = 0
    var totalD = 0
    // console.log(cartIteam.length)
    for(var i=0;i<cartIteam.length;i++){
        var inputValue = cartIteam[i].querySelector("input").value
        var productmoney = cartIteam[i].querySelector(".prices").innerHTML
        var totalA = inputValue * productmoney

        totalC = totalC + eval(totalA)
        totalD = totalC.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        f=totalD
    }
    // console.log(totalD)
    var tongtien = document.getElementById("text1")
    // console.log(tongtien)
    // var spgio = document.querySelector(".cart-icon span")
    tongtien.innerHTML = totalD+"đ"
    // spgio.innerHTML = cartIteam.length
    // inputchange()
}
cartTT()

// ------------------------------tăng giảm số lượng update lại giá -------------------------------

function step(btn,index){
    const inputs=document.querySelectorAll("tbody div.input-group .input")
    for(var i=0;i<inputs.length;i++){
        let id = btn.getAttribute("id")
        let ind = inputs[i].getAttribute("id")
        if(index==ind){
            let min = inputs[i].getAttribute("min")
            let max = inputs[i].getAttribute("max")
            let step = inputs[i].getAttribute("step")
            let val = inputs[i].getAttribute("value")
            let stepper = (id == "up") ? (step * 1) : (step * -1)
            let newvalua = parseInt(val)+stepper
            if(newvalua >= min && newvalua <= max){
                inputs[i].setAttribute("value",newvalua)
                let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
                listPD.map((valua,index)=>{
                    if(index==ind){
                        valua.SL=newvalua
                    }
                })
                localStorage.setItem("list", JSON.stringify(listPD))
            }
        }
        
        }
    cartTT()
}
var cartIteam = document.querySelectorAll("tbody div.products")
let numPD = localStorage.getItem("num") ? JSON.parse(localStorage.getItem("num")) :[]
localStorage.setItem("number", JSON.stringify(cartIteam.length))
var x=document.getElementById("num")
x.innerHTML=cartIteam.length
console.log(f)
const ad = document.querySelectorAll("button.tt")
ad.forEach(function(button,Home){
    button.addEventListener("click",function(event){{
        alert("Bạn đã thanh toán thành công \nSố tiền bạn cần phải thanh toán là:"+"\n"+f)
        localStorage.clear()
        location.reload()
    }})
})