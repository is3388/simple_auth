import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <App />
        <Routes>
            <Route path='/' exact element={<Welcome/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
</BrowserRouter>, document.querySelector('#root'))