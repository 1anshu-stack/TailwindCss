import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  return (
    <>
      <div className='bg-slate-400 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 ' > 
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
