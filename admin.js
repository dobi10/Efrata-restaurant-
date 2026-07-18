
// Firebase imports

import { auth, db } from "./firebase.js";


import {
signInWithEmailAndPassword,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
collection,
getDocs,
deleteDoc,
doc,
orderBy,
query
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Login

const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
document.getElementById("adminEmail").value;



const password =
document.getElementById("adminPassword").value;



try{


await signInWithEmailAndPassword(
auth,
email,
password
);



document.getElementById("loginMessage").innerHTML =
"Login successful";


}


catch(error){


document.getElementById("loginMessage").innerHTML =
"Incorrect email or password";


console.log(error);


}



});


}





// Check admin login status

onAuthStateChanged(auth,(user)=>{


if(user){


document.getElementById("dashboard").style.display="block";


const loginSection =
document.querySelector("#loginForm");


if(loginSection){

loginSection.style.display="none";

}



loadReservations();


}


});







// Load reservations

async function loadReservations(){



const list =
document.getElementById("reservationList");



list.innerHTML="Loading...";



const q =
query(
collection(db,"reservations"),
orderBy("createdAt","desc")
);



const snapshot =
await getDocs(q);



list.innerHTML="";



snapshot.forEach((item)=>{


const data=item.data();



const div=document.createElement("div");


div.className="admin-card";



div.innerHTML=`

<h3>${data.name}</h3>

<p>
Phone: ${data.phone}
</p>

<p>
Guests: ${data.guests}
</p>

<p>
Date: ${data.date}
</p>

<p>
Time: ${data.time}
</p>

<p>
Message: ${data.message}
</p>


<button class="btn delete-btn">
Delete
</button>

`;




div.querySelector(".delete-btn")
.onclick=async()=>{


await deleteDoc(
doc(db,"reservations",item.id)
);



div.remove();


};



list.appendChild(div);



});



}
