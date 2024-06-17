import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import ArticlesPage from './Components/ArticlesPage'
import Footer from './Components/Footer';

function App() {


  return (
    <BrowserRouter>
    <>
    <Header/>
    <NavigationBar/>
    <Routes>
      <Route path ="/" element={<ArticlesPage/>}/>
      </Routes>
   <Footer/>
    </>
    </BrowserRouter>
  )
}

export default App
