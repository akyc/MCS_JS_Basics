console.log("You are at " + window.location);

const image = document.querySelector('img');

console.log(image);
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));
image.setAttribute('src', 'go-go.png');
console.log(image.getAttribute('src'));