const add = document.querySelectorAll("button")
    add.forEach(function(button,Home){
    button.addEventListener("click",function(event){{
        var addItem = event.target
        var product = addItem.parentElement.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productname = product.querySelector("b").innerText
        var productmoney = product.querySelector("div .product-price").innerText
        // console.log(productImg, productmoney,productname)
        let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]           
            listPD.map((valua, index)=>{
               console.log(valua) 
            })
            listPD.push({
                img: productImg,
                names: productname,
                money: productmoney,
                SL: 1
            })
                        
        localStorage.setItem("list",JSON.stringify(listPD))
        a=listPD.length
        var x=document.getElementById("num")
        x.innerHTML=a
    }})
})
let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
a=listPD.length
var x=document.getElementById("num")
x.innerHTML=a
