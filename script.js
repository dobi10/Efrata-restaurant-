
// Firebase imports

import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Reservation form

const reservationForm =
document.getElementById("reservationForm");


if(reservationForm){


reservationForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const reservation = {

name:
document.getElementById("name").value,


phone:
document.getElementById("phone").value,


email:
document.getElementById("email").value,


guests:
document.getElementById("guests").value,


date:
document.getElementById("date").value,


time:
document.getElementById("time").value,


message:
document.getElementById("message").value,


createdAt:
serverTimestamp()

};




try{


await addDoc(
collection(db,"reservations"),
reservation
);



alert(
"Reservation submitted successfully!"
);



reservationForm.reset();



}

catch(error){


console.log(error);


alert(
"Something went wrong. Please try again."
);


}



});


}
