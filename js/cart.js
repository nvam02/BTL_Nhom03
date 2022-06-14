// --------------------------------Thêm vào giỏ hàng-----------------------

let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
let div_content = ''
listPD.map((valua, index)=>{
    div_content += '<div class="products" style="padding-bottom: 10px;"><div class="image-products"><img style="height: 160px; width: 120px;" src="'+ valua.img +'" alt=""></div><div class="infor-products"><a href="">'+ valua.names +'</a><br><span>M</span><br><span>'+ valua.money +'₫</span><br><div class="input-group"><button>-</button><input type="text" value="1"><button>+</button></div></div><div class="delete"><a href="#" class="cart-delete" onclick="xoa('+index+')" >Xóa sản phẩm</a></div></div>'
    
})
var add_div = document.createElement("div")
add_div.innerHTML = div_content
var cartTable = document.querySelector("tbody")
cartTable.append(add_div)

// ------------------------------xóa giỏ hàng-------------------------------

function xoa(index){
    var cartIteam = document.querySelectorAll("tbody div.products")
    for(var i=0;i<cartIteam.length;i++){
        var prdT = document.querySelectorAll(".cart-delete")
        prdT[i].addEventListener("click",function(event){
            var cartDelet = event.target
            var cartIT = cartDelet.parentElement.parentElement
            cartIT.remove()
            // let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
            // listPD.splice(index, 1)
            // localStorage.getItem("list", JSON.stringify(listPD))
        })
    }
}
xoa()