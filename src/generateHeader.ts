
import { app } from './main'
import { openMenu } from './openMenu'


export const generateHTMLHeader = ():void => {
      
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'header-div')

    let heading = document.createElement('h1')
    heading.textContent = 'My Hobby';

    let headerSvg = document.createElement('img');
    headerSvg.src = './public/cookingSvg.svg'
    headerSvg.setAttribute('class', 'cooking-svg')

      
    let menuContainer = document.createElement('div');
    
    
   
    

    headerSvg.addEventListener('click', () => {
        menuContainer.classList.toggle('menu-container')
        openMenu(menuContainer)
    })

    headerDiv.append(heading, headerSvg)
    app.appendChild(headerDiv)
}

