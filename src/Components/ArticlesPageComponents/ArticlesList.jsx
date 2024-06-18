import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../api";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticlesList =()=>{

const [articlesList, setArticlesList] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
    getArticles().then((data)=>{
        setIsLoading(false)
         setArticlesList(data.articles)
    })}
    , [])

if(isLoading){
    return (<section id="loading">
        <p>Articles list is loading</p>
    </section>)
}
    return (<section id="articlesListBox">
        <h2>Articles</h2>
        <ul id="articlesList">
            {articlesList.map((article)=>{
                return ( 
                <ArticleCard key={article.article_id} article={article}/>
            )
            })}
        </ul>
        </section>
       
    )
}

export default ArticlesList;