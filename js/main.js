let btns = document.querySelectorAll('.card .btn');

function Animal(id,name,count){
    this.Id = id;
    this.Name = name;
    this.Count = count;
}


let cartStr = localStorage.getItem('cart');

let cartItems;
if(!cartStr){
    cartItems = [];
}
else{
    cartItems = JSON.parse(cartStr);
}

document.querySelector('.count').innerText = cartItems.length;


btns.forEach(el=>{
    el.addEventListener('click',function(){
        
        let dataId = el.parentNode.parentNode.getAttribute('data-id');
        let dataName = el.previousElementSibling.previousElementSibling.innerText;

        console.log(dataName);



        let cartItem = cartItems.find(x=>x.Id == dataId);

        if(cartItem){
            cartItem.Count++;
        }
        else{
            cartItem = new Animal(dataId,dataName,1);
            cartItems.push(cartItem);
        }


        localStorage.setItem('cart',JSON.stringify(cartItems));

        // document.querySelector('#cartLink').addEventListener('click',function(){
        //     let tr = document.createElement('tr');
        //     document.querySelector('tbody').append(tr);
        //     // tr.append(dataId);
        //     // tr.append(dataName);
        //     // tr.append(cartItem.Count);
    
        //     let tdId = document.createElement('td');
        //     tdId.innerText = cartItem.Id;
        //     tr.append(tdId);
    
        //     let tdName = document.createElement('td');
        //     tdName.innerText = cartItem.Name;
        //     tr.append(tdName);
    
        //     let tdCount = document.createElement('td');
        //     tdCount.innerText = cartItem.Count;
        //     tr.append(tdCount);
        // })
    })
})
