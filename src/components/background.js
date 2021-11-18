import React, { Component } from 'react';

class Bg extends Component{
  render(){
    const bg_i=document.getElementById("background");
    const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png"];
    const chosenImage = images[Math.floor(Math.random() * images.length)]
    const paintImage=(chosenImage)=>{
      // const image = new Image();
      const image=document.createElement("img");
      image.src = `../assets/img/${chosenImage}`;
      // image.classList.add("bgImage");
      bg_i.appendChild(image);
    };
    paintImage(chosenImage);
    return(
      <div id="background_img">
      </div>
    );
  }
  
};
export default Bg;