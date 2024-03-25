
import { app } from './main'


export const generateHTMLHeader = ():void => {
    
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'header-div')

    let heading = document.createElement('h1')
    heading.textContent = 'My Hobby';

    let headerSvg = document.createElement('img');
    headerSvg.src = './public/cookingSvg.svg'
    headerSvg.setAttribute('class', 'cooking-svg')

    headerDiv.append(heading, headerSvg)
    app.appendChild(headerDiv)
}

