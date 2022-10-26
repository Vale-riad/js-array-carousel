const images = [ 
     'img/01.jpg',
     'img/02.jpg',
     'img/03.jpg',
     'img/04.jpg',
     'img/05.jpg',
];
console.log(images);

let containerImages = document.getElementById("items");
for (let index = 0; index < images.length; index++) {
    const img = `<div class="item active"><img src="${images[index]}"></div>`;
    containerImages.innerHTML += img; 
    if ( index === 0 ) {
        item.classList.add("active");
    }
}
let active = 0;
let item = document.querySelectorAll(".item")[active];   

