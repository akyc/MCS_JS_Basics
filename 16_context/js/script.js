/* console.log(this);
window.onscroll = function(){console.log(this);};

const button = document.querySelector('button');
button.onclick = function(){
    this.innerText = 'Pressed';
}; */
const button = document.querySelector('button');
button.onclick = () =>{
    console.log(this);
};