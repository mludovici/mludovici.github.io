import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AuthProvider } from './providers/AuthProvider'
import AdBlockComponent from './components/AdBlockComponent'
ReactDOM.render(
        <AdBlockComponent>           
            <AuthProvider>
                <App />
            </AuthProvider>
        </AdBlockComponent>,
    document.getElementById('root')
)
