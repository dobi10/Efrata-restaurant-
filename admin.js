
// Firebase will be connected here
// Replace the configuration in the next step


// Admin login

const loginForm = document.getElementById("loginForm");


if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();


const email =
document.getElementById("adminEmail").value;


const password =
document.getElementById("adminPassword").value;



/*
Temporary login check

Later this will be replaced with
Firebase Authentication
*/


if(email==="admin@efrata.com" && password==="admin123"){


document.getElementById("loginMessage").innerHTML =
"Login successful";


document.getElementById("dashboard").style.display="block";


document.querySelector("section").style.display="none";



loadReservations();



}

else{


document.getElementById("loginMessage").innerHTML =
"Wrong email or password";


}



});


}





// Reservation loading

function loadReservations(){


const list =
document.getElementById("reservationList");



if(list){


list.innerHTML=`

<div class="admin-card">

<h3>Example Reservation</h3>

<p>Name: Customer Name</p>

<p>Phone: 0900000001</p>

<p>Date: Available after Firebase connection</p>


</div>

`;


}



}




// Gallery upload preparation

const upload =
document.getElementById("galleryUpload");


if(upload){


upload.addEventListener("change",()=>{


alert(
"Image selected. Firebase Storage will be connected next."
);


});


  }
