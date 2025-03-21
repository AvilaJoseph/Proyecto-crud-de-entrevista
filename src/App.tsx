import React from 'react'
import { useState } from 'react'

import { BrowserRouter, Routes, useRoutes  } from 'react-router-dom'
import router from './router'

import './App.css'

function AppRoutes() {
  const element = useRoutes(router);
  return element;
}

function App() {

  return (
    <>
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
    </>
  )
}

export default App
