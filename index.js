let total = 0;
let click = 0;
function handleClickBtn(data){
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = (data.parentNode.childNodes[1].innerText);
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    click = click +1;
   
    if(click<=10){
        const price = data.parentNode.childNodes[5].innerText.split(" ")[1];
        total =parseInt(total) +parseInt(price);
        
    
        const firstTotal = document.getElementById("total").innerText ="Total :"+ total;
        const disc = total - (total*10)/100;
        const discount = document.getElementById("discount").innerText = "Price after 10% discount   :"  +  disc;
    

    }else{
        alert("product exceed")
    }



   

    
   
}

