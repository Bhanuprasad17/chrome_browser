import { createRoot } from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StyleSheetManager>
    <App />
  </StyleSheetManager>
)
