function Cars(img, name, model, color, price) {
 (this.img = img),
    (this.name = name),
    (this.model = model),
    (this.color = color),
    (this.price = price);
}

var car1 = new Cars(
  "https://cache3.pakwheels.com/system/car_generation_pictures/6000/original/Civic_10th_Gen_-_PNG.png?1635418859",
  "Civic",
  "2022",
  "Gray",
  "750000"
);

var getDiv = document.getElementById("div");
for (var key in car1) {
  getDiv.innerHTML = `<div class="card" style="width: 18rem;">
   <img src=${car1.img} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${car1["name"]}</h5>
     <p class="card-text">${car1["color"]}</p>
     <p class="card-text">${car1["price"]}</p>
     <p class="card-text">${car1["model"]}</p>
     <button class='btn btn-dark'> Add to Cart </button>
     </div>
 </div>`;
}


