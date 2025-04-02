import React from 'react'

import { RouterProvider } from 'react-router-dom'

import NavBar from './Components/NavbarContainer/NavBar';

import ContextApi from './Components/Context/Contextapi';
import { Toaster } from 'react-hot-toast';
import myRoutes from './Components/Router/Routes';


const App = () => {
  return (
    <div>
      <ContextApi>
      <RouterProvider router={myRoutes}/>
      </ContextApi>
      <Toaster/>
 
      
    </div>
  )
}

export default App