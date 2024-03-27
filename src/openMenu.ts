import { generateHTMLHeader } from "./generateHeader";
import { app } from "./main";


export const openMenu = (menuContainer: HTMLDivElement):void => {
console.log('open meny')

    app.appendChild(menuContainer)
}