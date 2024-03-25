import './styles/style.css'

import { generateHTMLHeader } from './generateHeader'

export let app = document.querySelector('#app') as HTMLDivElement || null

generateHTMLHeader()
