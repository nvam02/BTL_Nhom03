const add = document.querySelectorAll("button")
    add.forEach(function(button,Home){
    button.addEventListener("click",function(event){{
        var addItem = event.target
        var product = addItem.parentElement.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var productname = product.querySelector("b").innerText
        var productmoney = product.querySelector("span").innerText
        console.log(productImg, productmoney,productname)
        let listPD = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) :[]
            listPD.push({
                img: productImg,
                names: productname,
                money: productmoney 
            })
            localStorage.setItem("list",JSON.stringify(listPD))
        // localStorage.setItem("img",JSON.stringify(productImg))
        // localStorage.setItem("name",JSON.stringify(productname))
        // localStorage.setItem("money",JSON.stringify(productmoney))
        
    }})
})