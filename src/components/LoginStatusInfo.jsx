import React, { useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider'

export default function LoginStatusInfo() {
    let { currentUser } = useAuth()

    useEffect(() => {
        //console.dir(currentUser)
    }, [currentUser])
    let styles = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        backgroundColor: 'turquoise',
        padding: '5px',
        boxShadow: '5px 3px 2px grey',
        margin: '5px',
        zIndex: -10000,
    }
    return (
        <div style={styles}>
            You are currently {currentUser ? 'logged in!' : 'not logged in'}
        </div>
    )
}
