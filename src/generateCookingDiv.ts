import { app } from "./main";

export const generateHTMLCooking = ():void => {

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'site-content')

    let foodImg = document.createElement('img')
    foodImg.src = 'public/images/cooking-image.jpg'
    foodImg.setAttribute('class', 'food-img')

    let infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'site-content-info-div')

    let infoHeading = document.createElement('h3');
    infoHeading.textContent = 'Cooking'

    let infoTextContent = document.createElement('p');
    infoTextContent.textContent = "One of my greatest passions is undoubtedly cooking. It's not just a hobby for me; it's a form of self-expression that allows me to unleash my creativity and express myself freely. Whether I'm experimenting with new ingredients, recreating traditional dishes with my own twist, or inventing entirely new recipes from scratch, the kitchen is where I feel most at home. The process of cooking is not only about nourishing the body but also nourishing the soul, as I pour my love and passion into every dish I create. It's a journey of discovery, learning, and endless possibilities, where each meal becomes a canvas for my imagination."


    infoDiv.append(infoHeading, infoTextContent)
    contentDiv.append(foodImg, infoDiv)
    app.appendChild(contentDiv)
}