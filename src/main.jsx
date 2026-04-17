import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import FriendProvider from './Context/FriendProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>,
)
