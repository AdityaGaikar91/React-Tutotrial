// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Offers from './components/Offers.jsx'
import Help from './components/Help.jsx'
import Errorr from './components/Errorr.jsx'
import Signin from './components/Signin.jsx'
import RestaurantDetail from './components/RestaurantDetail.jsx'
import RealTimeClock from './components/RealTimeClock.jsx'
import Cart from './components/Cart.jsx'


let appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Errorr/>,
    children:[
      {
        path: '/',
        element:<Body/>
      },
      {
        path: '/offer',
        element:<Offers/>
      },
      {
        path: '/help',
        element:<Help/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetail/>
      },
      {
        path:'/clock',
        element: <RealTimeClock/>
      },
      {
        path:'/cart',
        element: <Cart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  // </StrictMode>,
)
