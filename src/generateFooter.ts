import { app } from "./main";

export const generateFooter = ():void => {
    let footerContainer = document.createElement('footer');
    footerContainer.setAttribute('class', 'footer-container')

    let footerLeftDiv = document.createElement('div')
    footerLeftDiv.setAttribute('class', 'footer-left-div')

    let nameInfo = document.createElement('p');
    nameInfo.textContent = 'Cecilia Lepik';


    let footerRightDiv = document.createElement('div');
    footerRightDiv.setAttribute('class', 'footer-right-div');

    let instagramLink = document.createElement('a')
    instagramLink.href = '#'

    let instagramIcon = document.createElement('i');
    instagramIcon.setAttribute('class', 'fa-brands fa-instagram')


    instagramLink.appendChild(instagramIcon)
    footerLeftDiv.append(nameInfo)
    footerRightDiv.append(instagramLink)
    footerContainer.append(footerLeftDiv, footerRightDiv)
    app.appendChild(footerContainer)

}