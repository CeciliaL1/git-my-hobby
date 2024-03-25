import './styles/style.css'

import { generateHTMLHeader } from './generateHeader'
import { generateSiteContent } from './generateSiteContent'

export let app = document.querySelector('#app') as HTMLDivElement || null

generateHTMLHeader()
generateSiteContent()