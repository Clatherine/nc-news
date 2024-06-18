import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ArticleDetails from "./ArticleByIdPageComponents/ArticleDetails";
import Votes from "./ArticleByIdPageComponents/Votes";
import CommentsSection from "./ArticleByIdPageComponents/CommentsSection";


const ArticleByIdPage =()=>{

    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [articleById, setArticleById] = useState({})
    const [newVotes, setNewVotes] = useState(0)

    const articlesApi = axios.create({
        baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"
    })

    useEffect(()=>{
        setIsLoading(true)
        articlesApi.get(`/api/articles/${article_id}`).then(({data})=>{
             setIsLoading(false)
             setArticleById(data.article)
         })
     }, [])

     if (isLoading) {
        return <p id="loading">Article getting ready for you...</p>;
      }

    return (
        <section id="articleByIdPage">
        <ArticleDetails articleById={articleById} newVotes={newVotes}/>
        <Votes setNewVotes={setNewVotes}/>
        <LeaveComment/>
        <CommentsSection/>
        </section>
    )
}


export default ArticleByIdPage