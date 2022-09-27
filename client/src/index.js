import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Welcome from './components/Welcome'
import Feature from './components/Feature'
import Signup from './components/auth/Signup'
import Signout from './components/auth/Signout'
import Signin from './components/auth/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(
    reducers, {
        //auth: { authenticated: localStorage.getItem('token')} push the code to authReducer
    }, // state
    applyMiddleware(reduxThunk)
)
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App>
        <Routes>
            <Route path='/' exact element={<Welcome />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signout' element={<Signout />} />
            <Route path='/feature' element={<Feature />} />
        </Routes>
    </App>
</BrowserRouter>
</Provider>, document.querySelector('#root'))