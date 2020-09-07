document.addEventListener("DOMContentLoaded", (event)=>{
    let pageBody = document.getElementById("body")
    let hexButton = document.querySelector(".hexButton")
    let hexText = document.querySelector(".hexText")
    let rgbText = document.querySelector('.rgbText')
    let rgbButton = document.querySelector('.rgbButton')
    
    const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    function getRandomNumber(){
        return Math.floor(Math.random() * hexColor.length)
    }  

    function makeHexColor(){
       let hexHash = '#';
       for(let i=0; i<6; i++){
           hexHash += hexColor[getRandomNumber()]
       }
       return hexHash
    }
   
    hexButton.addEventListener('click', () => {  
        let getColor = makeHexColor()             
        pageBody.style.backgroundColor = getColor;
        hexText.innerHTML = getColor; 
    })

    function getRandomRGBNumber(){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return `RGB(${r}, ${g}, ${b})`
    }   

    rgbButton.addEventListener('click', () => {
        let getColor = getRandomRGBNumber()
        pageBody.style.backgroundColor = getColor;
        rgbText.innerHTML = getColor;

    })
    

})