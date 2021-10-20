//CHECK WINDOW SIZE AND POSITION FOR MENU SETTINGS
$(window).resize(checkMenuDisplay);
$(window).scroll(highlightMenu);
$(window).click(highlightMenu);
window.addEventListener('load', highlightMenu);
window.addEventListener('load', checkMenuDisplay);

//TOGGLE MOBILE MENU
$(".navbar_toggle, .menu_link, #close_menu").click(function() {
    if(window.innerWidth < 570){
        $("#menu").css("visibility", "visible");
        $("#menu").slideToggle(500);
        $(".navbar_toggle").toggle();
        $("#close_menu").toggle();
    }
})

//TOGGLE MENU BASED ON SCREEN SIZE
function checkMenuDisplay() {
    if(window.innerWidth > 570){
        highlightMenu();
        $("#menu").css("visibility", "visible");
        $("#menu").css("display", "flex");
        $(".navbar_toggle").css("display", "none");
        $("#close_menu").css("display", "none");        
    }
    else {
        highlightMenu();
        $("#menu").css("display", "none");
        $(".navbar_toggle").css("display", "block");
        $("#close_menu").css("display", "none");
    }
}

//HIGHLIGHT UNDER MENU ITEM
function highlightMenu() {
    var halfWindowHeight = window.innerHeight / 2;
    var homePos = $(".anchor").get(0).getBoundingClientRect().top;
    var featuresPos = $(".anchor").get(1).getBoundingClientRect().top;
    var reviewsPos = $(".anchor").get(2).getBoundingClientRect().top;
    var purchasePos = $(".anchor").get(3).getBoundingClientRect().top;

    //ADD HIGHLIGHT CLASS TO MENU ITEM BASED ON SCREEN POSITION
    if (homePos < halfWindowHeight && homePos > -halfWindowHeight && window.innerWidth > 570) {
        $(".menu_link").removeClass("highlight");
        $("#home-page").addClass("highlight");
    }
    else if (featuresPos < halfWindowHeight && featuresPos > -halfWindowHeight && window.innerWidth > 570) {
        $(".menu_link").removeClass("highlight");
        $("#features-page").addClass("highlight");
    }
    else if (reviewsPos < halfWindowHeight && reviewsPos > -halfWindowHeight && window.innerWidth > 570) {
        $(".menu_link").removeClass("highlight");
        $("#reviews-page").addClass("highlight");
    }
    else if (purchasePos < halfWindowHeight && purchasePos > -halfWindowHeight && window.innerWidth > 570) {
        $(".menu_link").removeClass("highlight");
        $("#purchase-page").addClass("highlight");
    }
    else {
        $(".menu_link").removeClass("highlight");
    }
}

//UPDATE SELECTED COLOR BLOCK BORDER AND PRODUCT IMAGE
$(".color_block").click(function() {
    //UPDATES SELECTED BORDER
    $(this).css("border", "4px solid rgb(53, 53, 53)");
    $(this).siblings().css("border", "2px solid rgb(53, 53, 53)");
    //UPDATES PRODUCT IMAGE COLOR
    switch(this.id){
        case "black_block":
            $("#purchase_image").removeClass().addClass("purchase_image_grey");
            break;
        case "white_block":
            $("#purchase_image").removeClass().addClass("purchase_image_white");
            break
        case "blue_block":
            $("#purchase_image").removeClass().addClass("purchase_image_blue");
            break            
        case "red_block":
            $("#purchase_image").removeClass().addClass("purchase_image_red");
            break
    }
})

//UPDATE PRICE BASED ON PURCHASE QUANTITY
$("#quantity_btn").change(function() {
    $("#total_price").text("$" + Math.round((99.99 * this.value) * 100) / 100);
})

$("#cart").hide();
//TOGGLE CART WINDOW
$("#icon_toggle_cart, #footer_toggle_cart, #menu_toggle_cart").click(function() {
    $("#cart").css("visibility", "visible");
    $("#cart").slideToggle(500);
})

//CLOSE CART WINDOW
$("#close_cart").click(function() {
    $("#cart").slideToggle(500);
})

//ADD ITEM TO CART
$("#cart_add_btn").click(function() {
    //QUATITY SELECTED
    var quantity = $("#quantity_btn").val();
    //COLOR OF SELECTED ITEM
    var item_color = $("#purchase_image").attr("class");

    while (quantity > 0) {
        //CREATE NEW ITEM
        var newItem = $("<li class='cart_item'></li>").html(`
                    <img id="cart_image" class="${item_color}" src="assets/purchase_image.png">
                    <p>HEADPHONES $99.99</p>
                    <button type="button" class="remove_item">X</button>`);
        //ADD NEW ITEM TO CART
        $(".cart_items").append(newItem);
        quantity--;
    }
    $("#cart").css("visibility", "visible");
    $("#cart").slideToggle(500).delay(1500).slideToggle(500);
})

//REMOVE ITEM FROM CART
$(".cart_items").on("click", ".remove_item", function() {
    $(this).parent().remove();
})

//CHECKOUT BUTTON CLICK
$("#checkout_btn").click(function() {
    if($(".cart_items").children().length < 1){
        alert("Cart is empty.");
    }
    else {
        var totalPrice = Math.round((99.99 * $(".cart_items").children().length) * 100) / 100;
        alert(`CHECKOUT
        Total Price: $${totalPrice}`);
        $(".cart_items").empty();
    }
})
