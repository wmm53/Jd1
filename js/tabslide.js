var tab1 = document.getElementById("sale-tab")
var tab2 = document.getElementById("announcement-tab")
var sale = document.getElementsByClassName("sale")
var announcement = document.getElementsByClassName("announcement")
tab1.onmouseover = function (){
    sale.style.display="block"

}
tab2.onmouseover = function () {
    sale.style.display="none"
    announcement.style.display="block"
}