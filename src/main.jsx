import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={route}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)