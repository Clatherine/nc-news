import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import ArticlesPage from './Components/ArticlesPage'
import Footer from './Components/Footer';
import ArticleByIdPage from './Components/ArticleByIdPage';
import { UserProvider } from './UserContext';

function App() {


  return (
    <UserProvider>
    <BrowserRouter>
    <>
    <Header/>
    <NavigationBar/>
    <Routes>
      <Route path ="/" element={<ArticlesPage/>}/>
      <Route path="articles/:article_id" element={<ArticleByIdPage/>}/>
      </Routes>
   <Footer/>
    </>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
