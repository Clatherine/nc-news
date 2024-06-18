import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import ArticlesPage from './Components/ArticlesPage'
import Footer from './Components/Footer';
import ArticleByIdPage from './Components/ArticleByIdPage';

function App() {


  return (
    <BrowserRouter>
    <>
    <Header/>
    <NavigationBar/>
    <Routes>
      <Route path ="/" element={<ArticlesPage/>}/>
      <Route path="/:article_id" element={<ArticleByIdPage/>}/>
      </Routes>
   <Footer/>
    </>
    </BrowserRouter>
  )
}

export default App
