// // Event Name	      Kab Trigger Hota Hai
// // click	          Jab user click kare
// // dblclick  	      Double click
// // mouseover	      Mouse kisi element pe aaye
// // mouseout	          Mouse element se bahar jaye
// // keydown	          Keyboard key press
// // keyup	          Key chhodne par
// // submit	          Form submit hone par
// // change	          Input ya select ka value change hone par
// // input	          User input dete waqt


// // Event Listerner

// function sayHello() {
//     alert("Hello, Good Morning!");
// }


// // Ensure DOM is loaded before attaching event
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("myForm").addEventListener("submit", function (e) {
//         e.preventDefault(); // page reload rokta hai
//         let value = document.getElementById("name").value;
//         alert("Name: " + value);
//     });
// });


// // onsubmit function using onclick method
// function handleForm(e) {
//     e.preventDefault(); // page reload se rokta hai
//     let name = document.getElementById("namehai").value;
//     alert("Submitted name: " + name);
// }


// // <!-- OnChange EventListener -->
// function showValue(item) {
//     alert("You selected: " + item.value);
// }
