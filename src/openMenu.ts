
import { app } from "./main";


export const openMenu = (menuContainer: HTMLDivElement, menuNav:HTMLElement, menuUl: HTMLUListElement):void => {

    menuContainer.innerHTML = '';
    menuNav.innerHTML = '';
    menuUl.innerHTML = '';
   

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