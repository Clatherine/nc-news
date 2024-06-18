import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ArticleDetails from "./ArticleByIdPageComponents/ArticleDetails";
import Votes from "./ArticleByIdPageComponents/Votes";

const ArticleByIdPage =()=>{

    const [votes, setVotes] = useState(0)
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [articleById, setArticleById] = useState({})

    const articlesApi = axios.create({
        baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"
    })

    useEffect(()=>{
        articlesApi.get(`/api/articles/${article_id}`).then(({data})=>{
             setIsLoading(false)
             setArticleById(data.article)
         })
     }, [])

     if (isLoading) {
        return <p id="loading">Article getting ready for you...</p>;
      }

    return (
        <>
        <ArticleDetails articleById={articleById}/>
        <Votes/>
        </>
    )
}


export default ArticleByIdPage