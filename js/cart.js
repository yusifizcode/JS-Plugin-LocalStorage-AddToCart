let cartStr = localStorage.getItem('cart');

let cartItems;
if(!cartStr){
    cartItems = [];
}
else{
    cartItems = JSON.parse(cartStr);
}


[...cartItems].forEach(item=>{
    let tr = document.createElement('tr');
    document.querySelector('tbody').append(tr);
    // tr.append(dataId);
    // tr.append(dataName);
    // tr.append(cartItem.Count);

    let tdId = document.createElement('td');
    tdId.innerText = item.Id;
    tr.append(tdId);

    let tdName = document.createElement('td');
    tdName.innerText = item.Name;
    tr.append(tdName);

    let tdCount = document.createElement('td');
    tdCount.innerText = item.Count;
    tr.append(tdCount);

    let tdClose = document.createElement('td');
    let anchor = document.createElement('a');
    tdClose.append(anchor);
    
    anchor.setAttribute('href','');
    anchor.className = 'btn btn-outline-danger';
    anchor.style.textDecoration = 'none';
    anchor.innerText = 'X';
    anchor.style.color = 'white';
    anchor.style.fontSize = 15 + 'px';
    anchor.style.fontWeight = 700;
    anchor.style.cursor = 'pointer';
    tdClose.style.paddingLeft = 15 + 'px';
    tr.append(tdClose);



    tdClose.addEventListener('click',function(){
        console.log("nothing: "+cartItems);
        // [...cartItems].pop(this.parentNode);


        let removedEl = [...cartItems].find(x=>x.Id==tdClose.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
        console.log(removedEl);
        // [...cartItems][0] = removedEl;
        // console.log("0:"+[...cartItems][0].Id);
        // [...cartItems].shift();
        let remove = [...cartItems].indexOf(removedEl);
        console.log("removed: "+remove);
        cartItems.splice(Number(remove),1);
        // console.log("pop: "+cartItems);
        console.log("spliced: "+cartItems);

        localStorage.setItem('cart',JSON.stringify(cartItems));
        
        // console.log(tdClose.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
        // console.log(cartItems[0]);
        // [...cartItems].forEach(x=>console.log(x));
    })

})
console.log(cartItems);