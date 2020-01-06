const rep = document.querySelectorAll(".copyMe");
//console.log(rep);
let holder = {};
for (let i = 0; i < rep.length; i++){
    console.log(rep[i].textContent+' index: - '+i);
    rep[i].addEventListener("click",function(e){
        console.log(this);
        holder.obj = rep[i].cloneNode(true);
        holder.obj.style.cursor = "move";
        holder.obj.classList.add("newClone");
        holder.obj.style.backgroundColor = "green";
        holder.obj.style.left = rep[i].offsetLeft + 100 + "px";
        holder.obj.style.top =  rep[i].offsetTop + 200 + "px";
        
        document.body.appendChild(holder.obj);
    })
    rep[i].style.left = i * 140 + "px";
}