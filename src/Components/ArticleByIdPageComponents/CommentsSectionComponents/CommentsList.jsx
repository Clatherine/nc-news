import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentCard from "./CommentCard";
const CommentsList =()=>{

    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();

    const articlesApi = axios.create({
        baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"
    })
    useEffect(()=>{
        articlesApi.get(`/api/articles/${article_id}/comments`).then(({data})=>{
             console.log(data.comments)
             setIsLoading(false)
             setCommentsList(data.comments)
         })
     }, [])

    return(<section>
        {commentsList.map((comment)=>{
                return ( 
                <li key={comment.comment_id}>
                <CommentCard  comment={comment}/>
                </li>
            )
            })}
    </section>)
}

export default CommentsList