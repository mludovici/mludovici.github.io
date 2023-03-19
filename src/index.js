
import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App'
import { AuthProvider } from './providers/AuthProvider'
import AdBlockComponent from './components/AdBlockComponent'

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
        <AuthProvider>
            
    <AdBlockComponent>
            <App />
            </AdBlockComponent>
        </AuthProvider>
)
