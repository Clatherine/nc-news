import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../api";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticlesList =()=>{

const [articlesList, setArticlesList] = useState([])
const [isLoading, setIsLoading] = useState(true)

const articlesApi = axios.create({
    baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"
})
useEffect(()=>{
   articlesApi.get("/api/articles").then(({data})=>{
        console.log(data.articles)
        setIsLoading(false)
        setArticlesList(data.articles)
    })
}, [])
    return (<section >
        <h2>Articles</h2>
        <section id="articlesList">
            {articlesList.map((article)=>{
                return ( 
                <li key={article.articleId}>
                <ArticleCard  article={article}/>
                </li>
            )
            })}
        </section>
        </section>
       
    )
}

export default ArticlesList;