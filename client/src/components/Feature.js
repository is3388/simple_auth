import React from 'react'
import requireAuth from './requireAuth'

const Feature = () => {
    return (
        <div>
            <h3 style={{marginLeft: '10px'}}>This is the feature!</h3>
        </div>
    )
}

export default requireAuth(Feature)