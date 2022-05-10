const img = document.querySelector('img');
let Newsrc = "https://qtn.co.il/printable-drawings/wp-content/uploads/2021/06/29-1-e1622570281223.png"


img.addEventListener('click',function (){
    let tempSrc = this.src;
    this.src = Newsrc;
    Newsrc = tempSrc;

})