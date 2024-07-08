import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import HeroBanner from './components/HeroBanner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddPockemon from './components/AddPockemon'
import PockemonList from './components/PockemonList'
import EditPockemon from './components/EditPockemon'
 
const router = createBrowserRouter([
  {
     path:'/',
     element:<HeroBanner/>
  },
  {
    path:'/add',
    element:<AddPockemon />
  },
  {
    path:'/list',
    element: <PockemonList/>
  },
  {
    path:'/edit/:name/:index',
    element:<EditPockemon />
  },
  // {
  //   path:'/first',
  //   element:<FirstLook/>
  // },
 
])

function App() {
   

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
