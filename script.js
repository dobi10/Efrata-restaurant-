
// Mobile menu preparation

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

});


// Scroll animation

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});



// Reservation message

function reservationSuccess(){

    alert(
        "Thank you for choosing Efrata Restaurant. Your reservation has been received!"
    );

}



// Gallery image viewer

const galleryImages = document.querySelectorAll(".gallery img");


galleryImages.forEach(image => {

    image.addEventListener("click",()=>{

        let viewer = document.createElement("div");

        viewer.className="image-viewer";

        viewer.innerHTML=`
        <img src="${image.src}">
        `;


        document.body.appendChild(viewer);


        viewer.onclick=()=>{

            viewer.remove();

        };

    });

});



// Current year in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");


if(footerText){

    footerText.innerHTML =
    `© ${year} Efrata Restaurant • Bale Robe • All Rights Reserved`;

}
