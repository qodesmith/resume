import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import our top-level component.
import Resume from 'components/Resume'

// Mount our app.
ReactDOM.createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
)
