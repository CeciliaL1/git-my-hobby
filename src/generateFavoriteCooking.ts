import { app } from "./main";

export const generateHTMLFavoriteCooking = ():void => {

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'site-content')

    let foodImg = document.createElement('img')
    foodImg.src = 'public/images/slow-cooking.jpg'
    foodImg.setAttribute('class', 'food-img-favorite-cooking')

    let infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'site-content-info-div')

    let infoHeading = document.createElement('h3');
    infoHeading.textContent = 'My favorite thing to cook is slow cooked food'

    let infoTextContent = document.createElement('p');
    infoTextContent.textContent = "Cooking slow-cooked food is a culinary passion that transcends mere meal preparation. It's an immersive journey where time becomes an essential ingredient, transforming simple ingredients into sublime creations bursting with flavor. Each dish tells a story of patience and dedication, as flavors deepen and meld over hours of gentle simmering. The magic of slow cooking lies in its ability to unlock the hidden potential of ingredients. Tough cuts of meat surrender to the gentle heat, emerging tender and succulent, while vegetables soften and soak up the rich, savory broth. Spices and herbs infuse their aromatic essence into every spoonful, creating a symphony of taste and aroma that tantalizes the senses."

    infoDiv.append(infoHeading, infoTextContent)
    contentDiv.append(infoDiv, foodImg)
    app.appendChild(contentDiv)
}