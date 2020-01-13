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
        holder.obj.style.backgroundColor = "#ddfd43";
        holder.obj.style.left = rep[i].offsetLeft + "px";
        holder.obj.style.top =  rep[i].offsetTop + 200 + "px";
        holder.obj.moves = Math.floor(Math.random() * 25);
        
        holder.obj.StartX = rep[i].offsetLeft;
        holder.obj.startY = rep[i].offsetTop;
        
        holder.obj.int = setInterval(mover,25);
        
        function mover(){
            if(holder.obj.moves <= 0){
                clearInterval(holder.obj.int);
            }else{
                holder.obj.moves--;
                holder.obj.startY += 10;
                holder.obj.startX += 1;
                holder.obj.style.top = holder.obj.startY + "px";
                holder.obj.style.left = holder.obj.startX + "px";
            }
        }
        
        document.body.appendChild(holder.obj);
        console.log(holder.obj);

    })
    rep[i].style.left = i * 150 + "px";
}