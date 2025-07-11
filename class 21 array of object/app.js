// var student = [
//     {id1 : 23,
//         class34 : "12"
//     },
//     {id1 : 63,
//         class34 : "koi class nahi"},
//         {id1 : 8908,
//             class34 : "kajskjinuj"}
// ]

// for (var i=0 ; i<= student.length ; i++){

//     document.writeln(`<div style="width: 100%; border: 10px solid red;">${student[i].id1}</div>`)
//     // for (key in student[i]){
//     //     document.write(key + ":" +student[i][key] + "<br>")
//     // }
// }

var items = [
  {
    itemsName: "Iphone",
    itemsPrice: 1500000,
    itemsImage:
    "https://www.designinfo.in/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-128GB-Black-Titanium-8-485x485-optimized.webp",
  },

  {
    itemsName: "Samsaung",
    itemsPrice: 100000,
    itemsImage:
      "https://regen.pk/cdn/shop/files/REGEN-GalaxyS24Ultra-TitaniumBlack.png?v=1736776302",
  },

  {
    itemsName: "Motorola",
    itemsPrice: 20000,
    itemsImage:
      "https://images.priceoye.pk/motorola-moto-g84-pakistan-priceoye-fygue.jpg",
  },
];
var data = document.getElementById('main')
for(var i=0; i<=items.length; i++ ){
    // for(var key in items[i]){
        //     document.writeln(items[i][key])
        // }
        var data1 = items[i]
    
    data.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data1.itemsImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 ${data1.itemsName}>Card title</h5>
    <p ${data1.itemsPrice}</p>
    
  </div>
</div>`
}
