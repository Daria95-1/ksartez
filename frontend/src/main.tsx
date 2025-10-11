import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './app/core/redux/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/routes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
