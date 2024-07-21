const imgContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
  ImgNumber = 6;
  addNewImages();
})

function addNewImages(){
  for (let index = 0; index < ImgNumber; index++) {
    const newImg = document.createElement('img');
  newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
  imgContainer.appendChild(newImg);
    
  }

  
}