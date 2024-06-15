const imageContainerEL = document.querySelector(".image-container");
const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let x = 0;
let timer;

function updateGallery() {
    imageContainerEL.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x + 45;
        updateGallery();
    }, 3000);
}

prevE1.addEventListener("click", () => {
    x = x - 45; 
    clearTimeout(timer);
    updateGallery();
});

nextE1.addEventListener("click",() => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

updateGallery();
