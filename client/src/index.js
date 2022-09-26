import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

ReactDOM.render(
<Provider store={createStore(reducers, {})}>
<BrowserRouter>
    <App>
        <Routes>
            <Route path='/' exact element={<Welcome/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    </App>
</BrowserRouter>
</Provider>, document.querySelector('#root'))