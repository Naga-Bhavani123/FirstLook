import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="506795287271-oe1f2hp5s2k02ku8le1mc8sq6ne8cmrm.apps.googleusercontent.com">
     <StrictMode>
    <App />
  </StrictMode>,
  </GoogleOAuthProvider>,
 
)
