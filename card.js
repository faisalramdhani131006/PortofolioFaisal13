//panggil dulu element yang mau diedit
let card_widget = document.getElementById("card-widget");
let card_content = document.getElementById("card-content");

//pake add event listener biar card_widgetnya bisa di klik
card_widget.addEventListener("click", () => {
   /*  kalo di klik maka card_content bakal pake class .buka yang propertinya top si card_content nambah 40px,
        kalo di klik lagi card_content bakal mattin class .buka yang berarti top si card_content = 0 */
   card_content.classList.toggle("buka")
})