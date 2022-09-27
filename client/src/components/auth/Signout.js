import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signout } from '../../actions'

const Signout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(signout())
    }, [dispatch])

    return (
        <div>
            <h3 style={{marginLeft: '10px'}}>Sorry to see you leave!</h3>
        </div>
    )
}

export default Signout