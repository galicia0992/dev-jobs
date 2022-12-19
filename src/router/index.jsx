import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LayoutPage from '../pages/LayoutPage'
import Inicio from '../components/Inicio'
import { loaderTrabajos } from '../components/Trabajos'
import InfoTrabajo from '../pages/InfoTrabajo'
import { loaderTrabajo } from '../pages/InfoTrabajo'


    export const router = createBrowserRouter([
        {
          path:"/",
          element:<LayoutPage></LayoutPage>,
          children:[
            {
              path:"/",
              element:<Inicio></Inicio>,
              loader:loaderTrabajos
            },
            {
              path:"/:id", 
              element:<InfoTrabajo></InfoTrabajo>,
              loader:loaderTrabajo
            }
          ]
        }
      ])


