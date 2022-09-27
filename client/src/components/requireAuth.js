import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
 
const requireAuth = (ChildComponent) => props => {
    
    const authenticated = useSelector((state) => state.auth.authenticated)
    const navigate = useNavigate()
 
    useEffect(() => {
      if (!authenticated) { 
        navigate('/')
      }
    }, [authenticated, navigate])
 
    return <ChildComponent {...props} />
  }

export default requireAuth