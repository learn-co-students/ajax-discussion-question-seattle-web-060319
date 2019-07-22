const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  let button = document.querySelector('button')
  button.addEventListener('click', function(e) {
    fetchData();
  })
});

function fetchData() {
  fetch('https://randomuser.me/api/')
  .then(resp => resp.json())
  .then(json => renderData(json))
};

function renderData(obj) {
  let name = obj.results[0].name;
  let fullName = `${name.title.charAt(0).toUpperCase() + name.title.slice(1)} ${name.first.charAt(0).toUpperCase() + name.first.slice(1)} ${name.last.charAt(0).toUpperCase() + name.last.slice(1)}`
  let email = obj.results[0].email;
  let phone = obj.results[0].phone;
  let dob = obj.results[0].dob.date;
  let street = obj.results[0].location.street;
  let city = obj.results[0].location.city;
  let st = obj.results[0].location.state;
  let zip = obj.results[0].location.postcode;
  let h3 = document.getElementById('fullname');
  let efield = document.getElementById('email');
  let strh4 = document.getElementById('street');
  let ch4 = document.getElementById('city');
  let sth4 = document.getElementById('state');
  let ziph4 = document.getElementById('postcode');
  let phh4 = document.getElementById('phone');
  let dobh4 = document.getElementById('date_of_birth');
  h3.innerText = fullName;
  efield.innerText = email;
  strh4.innerText = street;
  ch4.innerText = city;
  sth4.innerText = st;
  ziph4.innerText = zip;
  phh4.innerText = phone;
  dobh4.innerText = dob;

}
