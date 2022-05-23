function Details(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p,
    this.image=i;
  }
  
  
  
  
  //store the products array in localstorage as "products"
  function products(e){
    e.preventDefault();
    let form=document.getElementById("products");
    
       let  type=form.type.value;
       let  desc=form.desc.value;
       let price=form.price.value;
       let  image=form.image.value;
    
  
    let prod1=new Details(type,desc,price,image);
    // console.log(prod1);
    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(prod1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
  }