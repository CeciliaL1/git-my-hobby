
import { app } from './main'
import { openMenu } from './openMenu'

/**
 * this will generate header with menu button
 */

export const generateHTMLHeader = ():void => {
      
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'header-div')

    let heading = document.createElement('h1')
    heading.textContent = 'My Hobby';

    let headerSvg = document.createElement('img');
    headerSvg.src = './public/cookingSvg.svg'
    headerSvg.setAttribute('class', 'cooking-svg')

      
    let menuContainer = document.createElement('div');
    let menuNav = document.createElement('nav');
    let menuUl = document.createElement('ul')
    
    headerSvg.addEventListener('click', () => {
        menuContainer.classList.toggle('menu-container')

        if(menuContainer.attributes[0].textContent === 'menu-container'){
            openMenu(menuContainer, menuNav,menuUl)
        } else {
            menuContainer.innerHTML = '';
         }
    })

    headerDiv.append(heading, headerSvg)
    app.appendChild(headerDiv)
}

