import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../api";
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