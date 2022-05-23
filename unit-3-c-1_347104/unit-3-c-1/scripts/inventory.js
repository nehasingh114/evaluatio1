products();


function products(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let allProducts=document.getElementById("all_products");
    allProducts.innerHTML=null;

    data.forEach(function(el,index) {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let type=document.createElement("p");
        type.innerText=el.type;

        let price=document.createElement("p");
        price.innerText=el.price;

        let desc=document.createElement("p");
        desc.innerText=el.desc;

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            itemDelete(index);
        });

        div.append(img,type,price,desc,btn);
        allProducts.append(div);
    });

}

function itemDelete(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];
   
   let updatedData= data.filter(function(el,i){
    if(i==index){
        let trash=JSON.parse(localStorage.getItem("deleted")) || [];
        trash.push(el);
        localStorage.setItem("deleted",JSON.stringify(trash));
    }
    else{
        return i!==index;
    }
   });
   localStorage.setItem("products",JSON.stringify(updatedData));
    
    products();
}