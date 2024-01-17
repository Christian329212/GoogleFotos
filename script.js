let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
              'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg',
              'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg',
             'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg',
              'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg',
               'img/26.jpg'];

function load() {
  for (let i = 0; i < images.length; i++) {
   let content = document.getElementById('image-container')
   content.innerHTML += /*html*/ `<div onclick="openImage(${i})">
   <img class="imgbox" src="${images[i]}"></div>`
  }
}


function openImage(i) {
  let singleImage = document.getElementById('single-image')
    singleImage.innerHTML = ""
    singleImage.classList.add('images-container');
    document.getElementById('single-image').classList.remove('d-none');
    document.getElementById('image-container').classList.add('d-none');

    singleImage.innerHTML += /*html*/ `
  <div class="single-image-container">
    <div class="single-image-icon1">
     <img class = "icon1" onclick="previousImage(${i})" src="img/left.png">
    </div>
    <div>
      <img id="show-image" class="show-image"  src="${images[i]}">
    <div class="single-image-icon2">
      <img class = "icon2" onclick="backButton()" src="img/images.png">
     </div>
     </div>
     <div class="single-image-icon3">
      <img class = "icon3" onclick="nextImage(${i})" src="img/right.png">
     </div>
   </div>
  `
}

function nextImage(i) {
  nextIndex = i + 1;
  if (nextIndex > images.length - 1) {
      nextIndex = 0;
  }
  openImage(nextIndex)
}

function previousImage(i) {
  previousIndex = i + 1;
  if (previousIndex > images.length - 1) {
      previousIndex = 0
  }
  openImage(previousIndex)
}



function backButton() {
  document.getElementById('image-container').classList.remove('d-none')
  document.getElementById('single-image').classList.add('d-none')
  document.getElementById('headline').classList.remove('d-none')
}





