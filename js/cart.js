// function show() {
    var img = localStorage.getItem("img")
    var money = localStorage.getItem("money")
    var names = localStorage.getItem("name")
    var anh = JSON.parse(img)
    var tien = JSON.parse(money)
    var ten = JSON.parse(names)
    
    var add_div = document.createElement("div")
    var div_content = '<div class="products"><div class="image-products"><img style="height: 160px; width: 120px;" src="'+ anh +'" alt=""></div><div class="infor-products"><a href="">'+ ten +'</a><br><span>M</span><br><span>'+ tien +'₫</span><br><div class="input-group"><button>-</button><input type="text" value="1"><button>+</button></div></div><div class="delete"><a href="">Xóa sản phẩm</a></div></div>'
    add_div.innerHTML = div_content
    
    var cartTable = document.querySelector("tbody")
    cartTable.append(add_div)
    
// }
// show()