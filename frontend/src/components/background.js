import {React, Component} from 'react';
import { render } from 'react-dom';
import styled,{css} from "styled-components";


const Container = styled.div`
    background: ${props=>props.backgroundImage};
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

function Bg(backgroundImage){
    const IMAGES = ["../assets/img/0.jpg", "../assets/img/1.jpg", "../assets/img/2.jpg", "../assets/img/3.jpg", "../assets/img/4.jpg", "../assets/img/5.jpg", "../assets/img/6.png"]
    const IMG_NUMBER = 6;
    const getRandom = () => {
        return Math.floor(Math.random() * IMG_NUMBER)
    }
    const paintImage = (imgNumber) => {
        const backgroundImage = "url('" + IMAGES[imgNumber] + "')"
        console.log(backgroundImage);
        document.body.style.backgroundImage = "url('../assets/img/0.jpg')";
    }
    return(
    <Container backgroundImage={backgroundImage}></Container>
    )
}

export default Bg;
    
    // var imgArray = new Array();
    // imgArray[0] = "{require('../assets/img/0.jpg').default}";
    // imgArray[1] = "{require('../assets/img/1.jpg').default}";
    // imgArray[2] = "{require('../assets/img/2.jpg').default}";
    // imgArray[3] = "{require('../assets/img/3.jpg').default}";

    // function showImage() {
    //     var imgNum = Math.round(Math.random() * 3);
    //     var objImg = document.getElementById("Img");
    //     objImg.src = imgArray[imgNum];
    // }




//     return (
//         <div onLoad="showImage()">
//             {/* <img id = "Img" border="0" alt="배경이미지"></img> */}
//             <img id="backGround" src={require('../assets/img/3.jpg').default}/>

//         </div>
//     )
// };
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
// export default Bg;