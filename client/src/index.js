import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(
    reducers,
    {}, // state
    applyMiddleware(reduxThunk)
)
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App>
        <Routes>
            <Route path='/' exact element={<Welcome/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    </App>
</BrowserRouter>
</Provider>, document.querySelector('#root'))