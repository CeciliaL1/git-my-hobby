
import { app } from "./main";


export const openMenu = (menuContainer: HTMLDivElement):void => {

    let menuNav = document.createElement('nav');

    let menuUl = document.createElement('ul')

    let menuItems = ['Home', 'My Favorite Ingrediens', 'My Cookware', 'Contact'] 

    menuItems.forEach(item => {
        let menuLi = document.createElement('li')
        menuLi.textContent = item;
        menuUl.append(menuLi)
    })

    menuNav.appendChild(menuUl)
    menuContainer.appendChild(menuNav)
    app.appendChild(menuContainer)
}