
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import ArticlesPage from './Components/ArticlesPage'
import Footer from './Components/Footer';
import ArticleByIdPage from './Components/ArticleByIdPage';
import { UserProvider } from './UserContext';
import NotFound from './Components/NotFound';
function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <div id='wholepage'>
      <div id="fixedbar">
    <Header/>
    <NavigationBar/>
    </div>
    <div id="changeable">
    <Routes>
    <Route path ="/" element={<ArticlesPage/>}/>
      <Route path="articles/:article_id" element={<ArticleByIdPage/>}/>
      <Route path="*" element ={<NotFound/>}/>
      </Routes>
   <Footer/>
   </div>
    </div>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
