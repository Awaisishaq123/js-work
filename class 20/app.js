let carData = {
    name: "",
    model: "",
    image: "",
    price: "",
    color: ""
  };
  
  document.getElementById("carForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      carData[key] = value;
    }
  
    // If all fields are filled, create card
    if (carData.name && carData.model && carData.image && carData.price && carData.color) {
      createCard(carData);
      carData = { name: "", model: "", image: "", price: "", color: "" };
      e.target.reset();
    } else {
      alert("Please fill all the fields!");
    }
  });
  
  function createCard(car) {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${car.image}" alt="Car Image">
      <h3>${car.name}</h3>
      <p><strong>Model:</strong> ${car.model}</p>
      <p><strong>Price:</strong> $${car.price}</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
  
    // Delete button
    card.querySelector(".delete").addEventListener("click", () => {
      card.remove();
    });
  
    // Edit button
    card.querySelector(".edit").addEventListener("click", () => {
      const newName = prompt("Edit Name", car.name);
      const newModel = prompt("Edit Model", car.model);
      const newPrice = prompt("Edit Price", car.price);
      const newColor = prompt("Edit Color", car.color);
      const newImage = prompt("Edit Image URL", car.image);
  
      if (newName) card.querySelector("h3").textContent = newName;
      if (newModel) card.querySelectorAll("p")[0].innerHTML = `<strong>Model:</strong> ${newModel}`;
      if (newPrice) card.querySelectorAll("p")[1].innerHTML = `<strong>Price:</strong> $${newPrice}`;
      if (newColor) card.querySelectorAll("p")[2].innerHTML = `<strong>Color:</strong> ${newColor}`;
      if (newImage) card.querySelector("img").src = newImage;
    });
  
    document.getElementById("cards-container").appendChild(card);
  }
  