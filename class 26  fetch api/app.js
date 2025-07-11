let getDiv = document.querySelector(".main");

fetch("https://api.escuelajs.co/api/v1/products")
/fetch("")

.then((data)=>{
return data.json()
})


.then((a)=>{
a.map((items)=>{
getDiv.innerHTML +=
`<div>

<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${items.email}</h5>
    <p class="card-text">${items.name}</p>
   
  </div>
</div>

































</div>`
})
})