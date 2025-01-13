console.log('Image slider with sliding animation')

const container = document.getElementById('container')
const images = document.querySelectorAll('img')

const leftButton = document.getElementById("left-icon")
const rightButton = document.getElementById("right-icon")

const data = [
  "https://images.unsplash.com/photo-1735657090869-a81c50626bd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702887161995-d8e4e4e95aec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675383208788-058c9eabed32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1704474164251-8b716e065e61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1735586971748-96f7425c0162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
  'https://images.unsplash.com/photo-1731596691186-631e1fc65acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDR8fHxlbnwwfHx8fHw%3D'
]

/*
  * TODO: Image slider with genuine sliding animation, automaticaly sliding with time interval infinitely
  * */

let currentImage = 0

data.forEach((link, index) => {
  const img = document.createElement('img');
  const div = document.createElement('div');

  img.src = link
  div.className = 'img-holder img-holder-right '

  if (index == currentImage)
    div.className += 'img-holder-active'

  div.appendChild(img)
  container.appendChild(div)
})


function moveRight() {
  const images = container.children
  images[currentImage].classList.remove('img-holder-active')
  images[currentImage].classList.remove('img-holder-right')
  images[currentImage].classList.add('img-holder-left')

  currentImage = (currentImage + 1 < data.length) ? currentImage + 1 : currentImage

  images[currentImage].classList.add('img-holder-active')
}


function moveLeft() {
  const images = container.children
  images[currentImage].classList.remove('img-holder-active')
  images[currentImage].classList.remove('img-holder-left')
  images[currentImage].classList.add('img-holder-right')

  currentImage = (currentImage - 1 >= 0) ? currentImage - 1 : currentImage

  images[currentImage].classList.add('img-holder-active')
}

rightButton.onclick = moveRight;
leftButton.onclick = moveLeft;

setInterval(moveRight, 1500)
