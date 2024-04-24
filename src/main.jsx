import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/Store.jsx'
import { NavBar } from './sections/NavBar.jsx'
import { Context } from './context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<BrowserRouter>
<Context>
    <App />
</Context>
</BrowserRouter>
    </Provider>

)
