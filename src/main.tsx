import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')
if( !root ) {
  throw new Error('HTML element with id of "root" element must exist in the body of index.html')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)