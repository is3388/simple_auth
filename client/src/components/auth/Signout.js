import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signout } from '../../actions'

const Signout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(signout())
    }, [dispatch])
    
    return (
        <div>Sorry to see you leave!</div>
    )
}

export default Signout