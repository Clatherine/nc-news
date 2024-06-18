import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ArticleDetails from "./ArticleByIdPageComponents/ArticleDetails";
import Votes from "./ArticleByIdPageComponents/Votes";
import CommentsSection from "./ArticleByIdPageComponents/CommentsSection";
import { getArticleById } from "../api";
import LeaveComment from "./ArticleByIdPageComponents/LeaveComment";

const ArticleByIdPage =()=>{

    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [articleById, setArticleById] = useState({})
    const [newVotes, setNewVotes] = useState(0)
    const [votesErrorMessage, setVotesErrorMessage]= useState("")

    useEffect(()=>{
        setIsLoading(true)
       getArticleById(article_id).then(({article})=>{
       
             setIsLoading(false)
             setArticleById(article)
         })
     }, [])

     if (isLoading) {
        return <p id="loading">Article getting ready for you...</p>;
      }

    return (
        <section id="articleByIdPage">
        <ArticleDetails articleById={articleById} newVotes={newVotes} setVotesErrorMessage={setVotesErrorMessage}/>
        <Votes setNewVotes={setNewVotes} setVotesErrorMessage={setVotesErrorMessage} votesErrorMessage={votesErrorMessage}/>
        <CommentsSection />
        </section>
    )
}


export default ArticleByIdPage