import {React, Component} from 'react';
import backgroundImage from '../styles/backgroundImage.css'

function Bg(){
    var imgArray = new Array();
	imgArray[0] = "{require('../assets/img/0.jpg').default}";
	imgArray[1] = "{require('../assets/img/1.jpg').default}";
	imgArray[2] = "{require('../assets/img/2.jpg').default}";
	imgArray[3] = "{require('../assets/img/3.jpg').default}";
	
	function showImage(){
		var imgNum = Math.round(Math.random()*3);
		var objImg = document.getElementById("Img");
		objImg.src = imgArray[imgNum];
	}

    return(
        <div onLoad="showImage()">
            {/* <img id = "Img" border="0" alt="배경이미지"></img> */}
            <img id="backGround" src={require('../assets/img/3.jpg').default}/>

        </div>
    )
};
//     render() 
//         const bg_i = document.getElementById("background");
//         const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png"];
//         const chosenImage = images[Math.floor(Math.random() * images.length)]
//         const paintImage = (chosenImage) => {
//             // const image = new Image();
//             const image = document.createElement("img");
//             image.src = require("../assets/img/${chosenImage}").default;
//             // image.classList.add("bgImage");
//             bg_i.appendChild(image);
//         };
//         paintImage(chosenImage);
//         return (
            
//             <div></div>
//         );
//     }

// };
export default Bg;