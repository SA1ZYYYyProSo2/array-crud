let users = [
  {
    id: 1,
    name: "alisher",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
  {
    id: 2,
    name: "alisher2",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
  {
    id: 3,
    name: "alisher3",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
  {
    id: 4,
    name: "alisher4",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
  {
    id: 5,
    name: "alisher5",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
  {
    id: 6,
    name: "alisher6",
    lastname: "Aliyev",
    age: 23,
    phone: "+998 93 500 91 91",
  },
];

let tbody = document.getElementById("tbody");
let input = document.getElementById("input");
let edit_name = document.getElementById("edit_name")
let edit_lastName = document.getElementById("edit_lastName")
let edit_age = document.getElementById("edit_age")
let edit_phone = document.getElementById("edit_phone")

function getUser(search) {
  let a = users.map(
    (item) => `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.lastname}</td>
        <td>${item.age}</td>
        <td>${item.phone}</td>
        <td>
        <button class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#editModal" id="staticBackdrop" onClick="openEdit(${item.id})">edit</button>
        <button class="btn btn-danger mx-2"onClick="deleteUser(${item.id})">delete</button>
        </td>
    </tr> `
  );
  tbody.innerHTML = a.join("");
}
getUser();

// search

input.addEventListener("keyup", (event) => {
  let search = users.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  let a = search.map(
    (item) => `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.lastname}</td>
        <td>${item.age}</td>
        <td>${item.phone}</td>
        <td><button class="btn btn-primary mx-2">edit</button><button class="btn btn-danger mx-2"">delete</button></td>
    </tr> `
  );
  tbody.innerHTML = a.join("");
});

// add user

function onFinish() {
  let name = document.getElementById("name");
  let lastName = document.getElementById("lastName");
  let age = document.getElementById("age");
  let phone = document.getElementById("phone");

  if (
    name.value !== "" &&
    lastName.value !== "" &&
    age.value !== "" &&
    phone.value !== ""
  ) {
    users.push({
      id: users.length + 1,
      name: name.value,
      lastName: lastName.value,
      age: age.value,
      phone: phone.value,
    });
    name.value = "";
    lastName.value = "";
    age.value = "";
    phone.value = "";
    getUser();
    var myModalEl = document.getElementById("staticBackdrop");
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  } else {
    alert("inpularni to'ldiring");
  }
}

// delete user

function deleteUser(id) {
  users.map((item, index) => {
    if (item.id === id) {
      users.splice(index, 1);
    }
  });
  getUser();
}
let userId = ""
function openEdit(id) {
  userId = id
  const user = users.find((u) => u.id == id);
  if (users) {
    document.getElementById("edit_name").value = user.name;
    document.getElementById("edit_lastName").value = user.lastname;
    document.getElementById("edit_age").value = user.age;
    document.getElementById("edit_phone").value = user.phone;

  }
}
function editUser(id) {
  users.map((item, index) =>{
    if (item.id === userId) {
      item.name = edit_name.value
      item.lastName = edit_lastName.value
      item.age = edit_age.value
      item.phone = edit_phone.value
    }
  })
  getUser()
  var myModalEl = document.getElementById("editModal");
  var modal = bootstrap.Modal.getInstance(myModalEl);
  modal.hide();
}
getUser();