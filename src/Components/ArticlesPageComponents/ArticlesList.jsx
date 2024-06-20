import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

const ArticlesList =({searchParams, searchTopic})=>{
const [articlesList, setArticlesList] = useState([])
const [isLoading, setIsLoading] = useState(true)
const topicQuery = searchParams.get("topic")
const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsError(false)
        if(topicQuery==='all'){
            getArticles().then((data)=>{
                setIsLoading(false)
                 setArticlesList(data.articles)
            })
        }
        else{
        getArticles(topicQuery).then((data)=>{
            setIsLoading(false)
             setArticlesList(data.articles)
        }).catch((err)=>{
            console.log('error', err)
            setIsError (true)
        })}}
    , [searchParams])
 
    if(isError){
        return (<section id="error">
            <p>Topic in URL does not exist! Please select a topic from the dropdown menu.</p>
        </section>)
    }

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