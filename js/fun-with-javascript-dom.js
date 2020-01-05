const rep = document.querySelectorAll(".copyMe");
console.log(rep);

for (let i = 0; i < rep.length; i++){
    console.log(rep[i].textContent+' index: - '+i);
    rep[i].addEventListener("click",function(e){
        console.log(this);
    })
    rep[i].style.left = i * 140 + "px";
}