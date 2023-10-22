
const btn = document.querySelectorAll('.js-add')

btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productPrice = product.querySelector("span").innerText
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H3").innerText
    addcart(productPrice,productImg,productName)
}})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    var trcontent = '<tr><div class="cart-list"><td><img src="'+productImg+'" class="cart-img" alt="" width="70px"></td><td><div class="cart-price"><p><p>$</p><span class="prices">'+productPrice+'</span></p></div></td><td><input class="cart-count" type="number" value="1" min="1"></td><td><span class="cart-delete"><i class="ti-trash"></i></span> </td></div></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}

function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice
        totalC = totalC + totalA
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
      for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement.parentElement
            cartitemR.remove()
            cartTotal()
            console.log(cartitemR)
        })
      
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
      for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}

