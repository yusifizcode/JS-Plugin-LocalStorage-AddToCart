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
})