// let array = [
//   {
//     id: 1,
//     name: "John",
//     age: 22,
//   },
//   {
//     id: 2,
//     name: "John2",
//     age: 22,
//   },
// ];

// // function addUser() {
// //   let obj = {
// //     id: 3,
// //     name: "John3",
// //     age: 23,
// //   };
// //   array.push(obj);
// //   console.log(array);
// // }

// // let array2 = [];
// // function push() {
// //   array2.push(12);
// //   array2.push("text");
// //   console.log(array2);
// // }
// // function deleteUser() {
// //   array.pop();
// //   console.log(array);
// // }
// // function arrayShift() {
// //   array.shift();
// //   console.log(array);
// // }
// // function unshift() {
// //   array.unshift({
// //     id: 0,
// //     name: "jdasd",
// //     age: 33,
// //   });
// //   console.log(array);
// // }

// // let array3 = [12, "text", false, 21, 222]

// // function func1() {
// //     array3.splice(0,1, "text2")
// //     array.map((item, index)=> {
// //         console.log(item);
// //     })
// //     // console.log(array3);
// // }

// // console.log(array3.join("/"));

// function drawUser() {
//   let a = array.map((item) => {
//     return `<ul>
//             <li>${item.id} ${item.name} ${item.age}</li>
//         </ul>`;
//   });
//   document.getElementById("users").innerHTML = a.join("");
//   console.log(a);
// }
// // document.getElementById("text").innerHTML = `<h1>lorem</h1>`
// // document.getElementById("text").innerText = `<h1>lorem</h1>`

// let obj = {
//   name: "ali",
//   age: 22,
// };

let num = [3, 5, 1, 6, 9, 13, 654, 21, 54, 1, 7, 8, 0, 19];

let result = num[0] + num[num.length - 1];

console.log(result);

let array = [
  {
    brand: "Toyota",
    models: [
      {
        model: "Camry",
        trims: [
          { trim: "LE", price: 25000 },
          { trim: "SE", price: 27000 },
          { trim: "XSE", price: 30000 },
        ],
      },
      {
        model: "Corolla",
        trims: [
          { trim: "L", price: 20000 },
          { trim: "LE", price: 22000 },
          { trim: "XLE", price: 25000 },
        ],
      },
    ],
  },
  {
    brand: "Honda",
    models: [
      {
        model: "Accord",
        trims: [
          { trim: "LX", price: 26000 },
          { trim: "Sport", price: 28000 },
          { trim: "Touring", price: 32000 },
        ],
      },
      {
        model: "Civic",
        trims: [
          { trim: "LX", price: 21000 },
          { trim: "Sport", price: 23000 },
          { trim: "EX", price: 25000 },
        ],
      },
    ],
  },
];

array.forEach((brand) => {
  console.log(`Brand: ${brand.brand}`);
  brand.models.forEach((model) => {
    console.log(`  Model: ${model.model}`);
    model.trims.forEach((trim) => {
      console.log(`    Trim: ${trim.trim}, Price: $${trim.price}`);
    });
  });
});