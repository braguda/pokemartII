$(document).ready(() => {

    var removeCartItemButtons = document.getElementsByClassName("btn-danger");
    for(let i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    } 

    var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("add-button");
    for (let i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClick);
    }

    document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked);

});

function purchaseClicked(){
    alert("Thank you!");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
    $(".modal-container").css("display", "none");
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClick(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("item-title")[0].innerText;
    var price = shopItem.getElementsByClassName("item-price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("items-image")[0].src;
    console.log(price, title, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
    alert("Your item has been added! ^-^")
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for(let i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title){
            alert("This item is already in your cart! ^-^");
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" 
                width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
    for( i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value
        total = total + (price*quantity);
    }
    total = Math.round(total * 100) /100;
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total;
}

// $(document).ready(() => {

//     var removeBtn = $(".btn-danger");

//     for(let i = 0; i < removeBtn.length; i++) {
//         let button = removeBtn[i];
//         button.addEventListener("click", removeCartItem);
//     }
    
//     var quantityInputs = $(".item-quantity-input");

//     for(let i = 0; i < quantityInputs.length; i++) {
//         let input = quantityInputs[i];
//         input.addEventListener("change", quantityChanged);
        
//     }

//     var addBtns = $(".add-button");

//     for(let i = 0; i < addBtns.length; i++) {
//         let addButton = addBtns[i];
//         addButton.addEventListener("click", addToCart);
//     }

// });

// function removeCartItem(event) {
//     let buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
// }

// function addToCart(event){
//     let button = event.target;
//     let item = button.parentElement.parentElement;
//     let title = item.getElementsByClassName("item-title")[0].innerText;
//     let price = item.getElementsByClassName("item-price")[0].innerText;
//     let imageSrc = item.getElementsByClassName("items-image")[0].src;
//     console.log(title, price, imageSrc);
//     addItemToCart(title, price, imageSrc);
//     updateCartTotal();
// }

// function addItemToCart(title, price, imageSrc) {
//     let cartRow = document.createElement("div");
//     cartRow.classList.add("cart-row");
//     let cartItems = $(".cart-row")[0];
//     let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
//     for(let i = 0; i < cartItemNames.length; i++){
//         if(cartItemNames[i].innerText == title) {
//             alert("This item is already in your cart! ^-^");
//             return
//         }
//     }
//     let cartRowContents = `
//         <div class="cart-item cart-column">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-item-price cart-column">${price}</span>
//         <div class="item-quantity cart-column">
//             <input class="item-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents;
//     cartItems.append(cartRow);
//     cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
//     cartRow.getElementsByClassName("item-quantity-input")[0].addEventListener("change", quantityChanged);
// }

// function quantityChanged(event){
//     let input = event.target;
//     if(isNaN(input.value) || input.value <=0) {
//         input.value = 1
//     }
//     updateCartTotal();
// }

// function updateCartTotal() {
//     let cartItemContainer = $(".cart")[0];
//     let cartRows = cartItemContainer.getElementsByClassName("cart-row");
//     let total = 0;
//     for(i =0; i < cartRows.length; i++){
//         let cartRow = cartRows[i];
//         let priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
//         let quantityElement = cartRow.getElementsByClassName("item-quantity-input")[0];
//         let price = parseFloat(priceElement.innerText.replace("$", ""));
//         let quantity = quantityElement.value;
//         total = total + (price*quantity);
//     };
//     total = Math.round(total *100)/100;
//     $(".cart-total-price")[0].innerText = "$" + total;
// }