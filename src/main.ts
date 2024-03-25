import './styles/style.css'

import { generateHTMLHeader } from './generateHeader'
import { generateHTMLCooking } from './generateCookingDiv'

export let app = document.querySelector('#app') as HTMLDivElement || null

generateHTMLHeader()
generateHTMLCooking()